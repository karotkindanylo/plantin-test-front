import { BlogCategory } from '@/components/BlogGrid';
import api from './api';
import { AxiosError } from 'axios';

interface ErrorResponse {
    message: string;
}

export const getPosts = async (): Promise<BlogCategory[]> => {
    try {
        const response = await api.get<{ blogCategories: BlogCategory[] }>('/posts');
        return response.data.blogCategories;
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

export const filterPosts = async (search: string): Promise<BlogCategory[]> => {
    try {
        const response = await api.get<{ blogCategories: BlogCategory[] }>('/filterPosts', {
            params: { search },
        });
        return response.data.blogCategories;
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
