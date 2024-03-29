import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts/Layout';
import MainPage from '../pages/MainPage';
import HeaderLayout from '../layouts/HeaderLayout';
import AdminPage from '../pages/AdminPage';
import LoginPage from '../pages/LoginPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <LoginPage />,
      },
      {
        element: <HeaderLayout />,
        children: [
          {
            path: '/main',
            element: <MainPage />,
          },
          {
            path: '/admin',
            element: <AdminPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
