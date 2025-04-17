import search from '@/assets/search.svg';

interface SearchInputProps {
    placeholder?: string;
    className?: string;
    searchQuery: string;
    handleSearchQuery: (search: string) => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({
    placeholder = 'Search',
    className = '',
    searchQuery,
    handleSearchQuery,
}) => {
    return (
        <div className={`relative bg-white rounded-[0.75rem] ${className}`}>
            <input
                value={searchQuery}
                onChange={(e) => handleSearchQuery(e.target.value)}
                placeholder={placeholder}
                className="w-full md:h-[3.5rem] h-[40px] rounded-[0.75rem] pl-[1rem] 
                pr-[3rem] py-[1rem] text-[#91A0B6] font-normal text-[16px] 
                placeholder-[#91A0B6] text-ellipsis overflow-hidden"
            />
            <div className="absolute right-[1rem] top-1/2 transform -translate-y-1/2 pointer-events-none">
                <img src={search} alt="Search" className="w-[24px] h-[24px]" />
            </div>
        </div>
    );
};
