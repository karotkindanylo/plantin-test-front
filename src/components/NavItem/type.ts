export type NavItemProps = React.AnchorHTMLAttributes<HTMLAnchorElement | HTMLButtonElement> & {
    children?: React.ReactNode;
    type?: 'link' | 'button';
    text?: string;
    to?: string;
};
