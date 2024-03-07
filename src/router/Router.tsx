import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Main from '../pages/MainPage';
import Login from '../pages/LoginPage';
import HeaderLayout from '../layouts/HeaderLayout';
import Admin from '../pages/AdminPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
      {
        element: <HeaderLayout />,
        children: [
          {
            path: '/',
            element: <Main />,
          },
          {
            path: '/admin',
            element: <Admin />,
          },
        ],
      },
    ],
  },
]);

export default router;
