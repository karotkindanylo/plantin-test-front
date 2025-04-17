import { SearchBar } from '@/components/SearchBar/SearchBar';
import './Home.css';
import { BlogGrid, BlogCategory } from '@/components/BlogGrid';
import { useEffect, useState } from 'react';
import { filterPosts, getPosts } from '@/api/postsApi';

export const Home: React.FC = () => {
    const [posts, setPosts] = useState<BlogCategory[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [filtredPosts, setFiltredPosts] = useState<BlogCategory[]>([]);

    const fetchPosts = async () => {
        try {
            const response = await getPosts();
            setPosts(response);
            setFiltredPosts(response);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSearchChange = async (search: string) => {
        try {
            setSearchQuery(search);
            if (search) {
                const filtred = await filterPosts(search);
                setFiltredPosts(filtred);
            } else {
                setFiltredPosts(posts);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);
    return (
        <div className="home gap-[18px] md:gap-12 flex flex-col">
            <SearchBar searchQuery={searchQuery} handleSearchQuery={handleSearchChange} />
            <BlogGrid categories={filtredPosts || []} searchQuery={searchQuery} />
        </div>
    );
};
