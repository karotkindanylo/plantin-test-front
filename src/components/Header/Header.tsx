import { useEffect, useRef, useState } from 'react';
import { navRoutes } from './config';
import { NavItem } from '@/components/NavItem';

export const Header: React.FC = () => {
    const [headerHeight, setHeaderHeight] = useState(0);
    const headerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (headerRef.current) {
            setHeaderHeight(headerRef.current.offsetHeight);
        }

        const handleResize = () => {
            if (headerRef.current) {
                setHeaderHeight(headerRef.current.offsetHeight);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <>
            <nav ref={headerRef} className="hidden md:block fixed top-0 left-0 h-[64px] w-full bg-white shadow-sm z-10">
                <div className="mx-auto px-[13%] py-4">
                    <div className="flex justify-between items-center">
                        <div className="hidden md:flex space-x-6">
                            {navRoutes.map((route) => (
                                <NavItem key={route.to} to={route.to} text={route.text} />
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
            <div style={{ height: `${headerHeight}px` }}></div>
        </>
    );
};
