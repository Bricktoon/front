import axios from 'axios';

const apiUrl = import.meta.env.VITE_APP_BASE_URL;

export const cleanHeaderInstance = axios.create({
  baseURL: `${apiUrl}`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  withCredentials: true,
  headers: {
    // Authorization: `${getAccessTokenLocalStorage()}`,
  },
});

// const refreshToken = localStorage.getItem('EXIT_LOGIN_REFRESH_TOKEN');
// const accessToken = localStorage.getItem('EXIT_LOGIN_TOKEN');
