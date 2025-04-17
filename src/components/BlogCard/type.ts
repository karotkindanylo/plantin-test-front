export type BlogCardSize = 'large' | 'medium' | 'small';

export interface BlogCardProps {
    image: string;
    date: string;
    title: string;
    description: string;
    size: BlogCardSize;
    className?: string;
}
