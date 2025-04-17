import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { HeaderMobile } from '@/components/HeaderMobile';
import React from 'react';

type MainLayoutProps = {
    children: React.ReactNode;
};

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            <HeaderMobile />
            {children}
            <Footer />
        </>
    );
};
