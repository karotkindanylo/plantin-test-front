import { getTemperature } from '@/api/temperatureApi';
import backhround from '@/assets/image.png';
import { SearchInput } from '@/components/SearchInput';
import { useEffect, useState } from 'react';

interface SearchBarProps {
    searchQuery: string;
    handleSearchQuery: (search: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, handleSearchQuery }) => {
    const [temperature, setTemperature] = useState<number>();

    const fetchTemperature = async () => {
        try {
            const response = await getTemperature();
            setTemperature(response.temperature);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchTemperature();
    }, []);
    return (
        <div className="flex flex-col bg-[#04BF9429] p-[1rem] md:p-[3.5rem] pr-4 md:pr-[12rem] rounded-2xl gap-2 mt-14 relative">
            <div className="text-[#04BF94] font-extrabold md:text-[32px] text-[24px] align-middle">
                Stay always tuned with planting trends
            </div>
            <div className="hidden md:block text-[#242424] font-bold text-[18px] align-middle">
                Current temperature is: {temperature}°C
            </div>
            <div className="md:hidden text-[#242424] text-[18px] font-popins">
                <span className="font-bold">Tips & Tricks</span> selected specially for{' '}
                <span className="font-bold">you</span>!
            </div>
            <SearchInput
                className="w-full max-w-[32.625rem] mt-2 md:mt-4"
                searchQuery={searchQuery}
                handleSearchQuery={handleSearchQuery}
            />
            <img
                src={backhround}
                alt="background"
                className="hidden md:block absolute bottom-0 right-0 max-w-[23.6875rem] h-auto object-contain"
            />
        </div>
    );
};
