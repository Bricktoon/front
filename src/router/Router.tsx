import { createBrowserRouter, Navigate } from 'react-router-dom';
import Layout from '../layouts/Layout';
import MainPage from '../pages/MainPage';
import HeaderLayout from '../layouts/HeaderLayout';
import AdminPage from '../pages/AdminPage';
import LoginPage from '../pages/LoginPage';

// 로컬스토리지에서 토큰을 가져오는 함수
const getTokenFromLocalStorage = () => {
  return localStorage.getItem('token');
};

// 토큰이 있는지 확인하는 함수
const isTokenExist = () => {
  const token = getTokenFromLocalStorage();
  return !!token;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        element: <HeaderLayout />,
        children: [
          {
            path: '/',
            element: isTokenExist() ? <MainPage /> : <Navigate to='/login' />,
          },
          {
            path: '/admin',
            element: isTokenExist() ? <AdminPage /> : <Navigate to='/login' />,
          },
        ],
      },
    ],
  },
]);

export default router;
