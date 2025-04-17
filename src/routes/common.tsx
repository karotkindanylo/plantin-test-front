import { lazily } from 'react-lazily';
import { Navigate } from 'react-router-dom';

const { Home } = lazily(() => import('@/pages/Home'));

export const commonRoutes = () => [
    { path: '/', element: <Home /> },
    { path: '*', element: <Navigate to="/" replace /> },
];
