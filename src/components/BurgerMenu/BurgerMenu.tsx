import { useState } from 'react';
import { navRoutes } from './config';

interface BurgerMenuProps {
    isOpen: boolean;
}

export const BurgerMenu: React.FC<BurgerMenuProps> = ({ isOpen }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleItemClick = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <div
            className={`fixed left-0 w-full h-full flex items-center justify-center bg-gray-100 bg-opacity-50 z-10 ${isOpen ? 'block' : 'hidden'}`}
        >
            <ul className="flex flex-col w-full justify-center items-center gap-4">
                {navRoutes.map((el, index) => (
                    <li
                        key={el.to}
                        className={`py-4 px-6 w-full text-center rounded-lg cursor-pointer transition-all duration-200 ${
                            activeIndex === index ? 'bg-gray-200' : 'hover:bg-gray-200'
                        }`}
                        onClick={() => handleItemClick(index)}
                    >
                        <a href="#home">{el.text}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};
