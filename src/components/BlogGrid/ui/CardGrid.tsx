import { BlogCardSize, BlogPost } from '../type';
import { BlogCard } from '@/components/BlogCard/BlogCard';

interface CardGridProps {
    posts: BlogPost[];
    cardSize: BlogCardSize;
}

export const CardGrid: React.FC<CardGridProps> = ({ posts, cardSize }) => {
    return (
        <div className="grid grid-cols-12 gap-4 md:gap-8">
            {posts.map((post) => (
                <div
                    key={post.id}
                    className={`
                        col-span-12
                        ${cardSize === 'large' ? 'md:col-span-12' : ''}
                        ${cardSize === 'medium' ? 'md:col-span-6' : ''}
                        ${cardSize === 'small' ? 'md:col-span-4' : ''}
                    `}
                >
                    <BlogCard
                        image={post.image}
                        date={post.date}
                        title={post.title}
                        description={post.description}
                        size={window.matchMedia('(min-width: 768px)').matches ? cardSize : 'small'}
                    />
                </div>
            ))}
        </div>
    );
};
