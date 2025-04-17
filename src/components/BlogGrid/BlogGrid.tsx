import { BlogGridProps } from './type';
import { CardGrid, CategoryHeader } from './ui';
import { TryForFreeBlock } from '@/components/TryForFreeBlock';

export const BlogGrid: React.FC<BlogGridProps> = ({ categories, searchQuery, className = '' }) => {
    if (searchQuery) {
        const allPosts = categories.flatMap((category) => category.posts);

        return (
            <div className={`flex flex-col gap-4 ${className}`}>
                <CardGrid posts={allPosts} cardSize="small" />
            </div>
        );
    }

    return (
        <div className={`flex flex-col gap-4 ${className}`}>
            {categories.map((category, categoryIndex) => {
                const isInterestingWithExtra = category.id === 'interesting' && category.posts.length > 6;

                return (
                    <div key={category.id} className="flex flex-col gap-4">
                        <div className="relative">
                            <CategoryHeader title={category.title} variant={category.variant} />
                        </div>

                        {isInterestingWithExtra ? (
                            <>
                                <CardGrid posts={category.posts.slice(0, 6)} cardSize={category.cardSize} />
                                <TryForFreeBlock />
                                <CardGrid posts={category.posts.slice(6)} cardSize={category.cardSize} />
                            </>
                        ) : (
                            <CardGrid posts={category.posts} cardSize={category.cardSize} />
                        )}

                        {categoryIndex < categories.length - 1 && <div className="w-full h-px bg-[#C4C4C4] mt-8"></div>}
                    </div>
                );
            })}
        </div>
    );
};
