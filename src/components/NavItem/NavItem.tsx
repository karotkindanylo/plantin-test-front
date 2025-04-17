import { NavLink } from 'react-router-dom';
import { NavItemProps } from './type';

export const NavItem: React.FC<NavItemProps> = (props: NavItemProps) => {
    const { children, type = 'link', text, to, ...restProps } = props;

    const Element = type === 'link' ? NavLink : 'button';

    return (
        <Element className="hover:text-green-600" to={to ?? ''} {...restProps}>
            {children ?? text}
        </Element>
    );
};
