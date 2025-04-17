import api from './api';
import { AxiosError } from 'axios';

interface TemperatureResponse {
    temperature: number;
}

interface ErrorResponse {
    message: string;
}

export const getTemperature = async (): Promise<TemperatureResponse> => {
    try {
        const response = await api.get<TemperatureResponse>('/temperature');
        return response.data;
    } catch (err) {
        const error = err as AxiosError<ErrorResponse>;

        if (error.response) {
            const status = error.response.status;
            const message = error.response.data?.message || 'Server returned an error';

            console.error(`Error ${status}: ${message}`);
            throw new Error(message);
        } else if (error.request) {
            console.error('Network error: No response received from the server');
            throw new Error('Network error: Please check your internet connection or try again later.');
        } else {
            console.error('Unexpected error:', error.message);
            throw new Error('An unexpected error occurred. Please try again.');
        }
    }
};
