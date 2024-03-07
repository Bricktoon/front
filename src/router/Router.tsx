import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Main from '../pages/Main';
import Login from '../pages/Login';
import HeaderLayout from '../layouts/HeaderLayout';

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
        ],
      },
    ],
  },
]);

export default router;
