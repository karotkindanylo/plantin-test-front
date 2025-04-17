import { useRef, useState } from 'react';
import { BurgerMenu } from '../BurgerMenu';
import { XMarkIcon } from '@heroicons/react/24/outline';

export const HeaderMobile: React.FC = () => {
    const headerRef = useRef<HTMLDivElement>(null);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };
    return (
        <>
            <nav
                ref={headerRef}
                className="md:hidden px-4 py-5 fixed top-0 left-0 h-[64px] w-full bg-white shadow-sm z-10"
            >
                <div className="flex md:hidden justify-between w-full items-center">
                    <div className="flex items-center space-x-2 h-[24px]">
                        <img src="/plantin.svg" alt="Logo" className="h-6 w-auto" />
                        <img src="/PlantInText.svg" alt="PlantInText" className="h-[17.1px]" />
                    </div>
                    {isMenuOpen ? (
                        <XMarkIcon className="h-[32px] w-[32px] text-gray-500 cursor-pointer" onClick={toggleMenu} />
                    ) : (
                        <img src="/frame.svg" alt="frame" className="h-[32px] w-[32px]" onClick={toggleMenu} />
                    )}
                </div>
            </nav>
            <div className="h-[64px] md:h-[0px]"></div>
            <BurgerMenu isOpen={isMenuOpen} />
        </>
    );
};
