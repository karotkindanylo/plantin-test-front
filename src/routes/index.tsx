import { useRoutes } from 'react-router-dom';
import { commonRoutes } from './common';

export const AppRoutes = () => {
    const routes = [...commonRoutes()];

    const element = useRoutes(routes);

    return element;
};
