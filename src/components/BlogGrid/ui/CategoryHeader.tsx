import bookmark from '@/assets/bookmark.svg';

interface CategoryHeaderProps {
    title: string;
    variant?: 'new' | 'regular';
}

export const CategoryHeader: React.FC<CategoryHeaderProps> = ({ title, variant }) => {
    if (variant === 'new') {
        return (
            <div className="relative">
                <div className="absolute left-[20px] top-[8px]">
                    <h2 className="text-white text-[14px] leading-[20px] font-semibold">{title}</h2>
                </div>
                <img src={bookmark} alt="bookmark" />
            </div>
        );
    }

    return <h2 className="text-[1rem]/6 text-[#91A0B6] font-bold">{title}</h2>;
};
