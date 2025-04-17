export type BlogCardSize = 'large' | 'medium' | 'small';

export interface BlogPost {
    id: string;
    image: string;
    date: string;
    title: string;
    description: string;
}

export interface BlogCategory {
    id: string;
    title: string;
    posts: BlogPost[];
    cardSize: BlogCardSize;
    variant?: 'new' | 'regular';
}

export interface BlogGridProps {
    categories: BlogCategory[];
    className?: string;
    searchQuery?: string;
}
