import { BlogCardProps } from './type';

export const BlogCard: React.FC<BlogCardProps> = ({ image, date, title, description, size, className = '' }) => {
    const sizeClasses = {
        large: 'w-full flex flex-col md:flex-row md:gap-8',
        medium: 'w-full flex flex-col',
        small: 'w-full flex flex-col',
    };

    const imageClasses = {
        large: 'w-full md:w-[calc(50%-1rem)] aspect-[16/10] object-cover rounded-xl',
        medium: 'w-full aspect-[16/10] object-cover rounded-xl',
        small: 'w-full aspect-[16/10] object-cover rounded-xl',
    };

    const contentClasses = {
        large: 'w-full md:w-1/2 mt-4 md:mt-0 flex flex-col',
        medium: 'mt-4 flex flex-col',
        small: 'mt-4 flex flex-col',
    };

    return (
        <div className={`${sizeClasses[size]} ${className}`}>
            <img src={image} alt={title} className={imageClasses[size]} />

            <div className={contentClasses[size]}>
                <p className="text-[#ADB8C8] text-[1rem]">{date}</p>
                <h3
                    className={`font-bold ${size === 'large' && window.innerWidth >= 768 ? 'text-[2.5rem]' : 'text-[1.5rem]'} mt-2`}
                >
                    {title}
                </h3>
                <p className={`text-[#78787A] ${size === 'large' && window.innerWidth >= 768 ? 'mt-4' : 'mt-2'}`}>
                    {description}
                </p>
            </div>
        </div>
    );
};
