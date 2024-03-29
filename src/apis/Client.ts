import axios, { AxiosError, AxiosResponse } from 'axios';

export const getAccessTokenLocalStorage = () => {
  const accessTokens = localStorage.getItem('accessToken');
  return accessTokens ? `Bearer ${accessTokens}` : '';
};

// export const getRefreshTokenLocalStorage = () => {
//   const refreshToken = localStorage.getItem('EXIT_LOGIN_REFRESH_TOKEN');
//   return refreshToken ? `Bearer ${refreshToken}` : '';
// };

// export const checkCurrentMode = () => {
//   const currentMode = import.meta.env.PROD ? 'production' : 'development';
//   return currentMode;
// };

// export const authInstance = axios.create({
//   baseURL: import.meta.env.VITE_APP_BASE_URL,
//   withCredentials: true,
//   headers: {
//     'X-Environment': `${checkCurrentMode()}`,
//   },
// });

const apiUrl = import.meta.env.VITE_APP_BASE_URL;
const accessTokend = localStorage.getItem('accessToken');
console.log('토큰' + accessTokend);

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
    Authorization: `Bearer ${accessTokend}`,
  },
});

// const refreshToken = localStorage.getItem('EXIT_LOGIN_REFRESH_TOKEN');
// const accessToken = localStorage.getItem('EXIT_LOGIN_TOKEN');

// instance.interceptors.request.use(
//   (config) => {
//     if (!localStorage.getItem('EXIT_LOGIN_REFRESH_TOKEN')) {
//       window.location.href = '/error';
//       return config;
//     }

//     config.headers.Authorization = `Bearer ${localStorage.getItem('EXIT_LOGIN_TOKEN')}`;

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   },
// );

// export async function postRefreshToken() {
//   console.log('refreshToken ');

//   try {
//     const response = await cleanHeaderInstance.post('/oauth/reissue', {
//       accessToken: accessToken,
//       refreshToken: refreshToken,
//     });

//     return response;
//   } catch (error) {
//     // @ts-ignore
//     handleRefreshTokenError(error);
//     return Promise.reject(error);
//   }
// }

// instance.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalConfig = error.response?.config;
//     const msg = error.response?.data?.message;
//     const status = error.response?.data?.status;

//     if (status === 401) {
//       console.log('401에러가 떠서 interceptor 실행한다.');
//       if (msg === '액세스 토큰이 만료되었습니다. 재발급 받아주세요.') {
//         console.log('엑세스 토큰 만료 메세지 인식 했다.');

//         try {
//           const response = await postRefreshToken();

//           if (response?.data?.status === 200) {
//             console.log('엑세스 토큰 api 요청 성공했다.');
//             updateTokens(response.data.data.accessToken, response.data.data.refreshToken);
//             originalConfig.headers.Authorization = `Bearer ${response.data.data.accessToken}`;
//             return axios(originalConfig);
//           }
//         } catch (error) {
//           // @ts-ignore
//           handleRefreshTokenError(error);
//         }
//       }
//     }

//     return Promise.reject(error);
//   },
// );

// function handleRefreshTokenError(error: AxiosError) {
//   if (axios.isAxiosError(error)) {
//     if (error.response) {
//       console.log('에러 응답 데이터:', error.response.data);
//       console.log('에러 상태 코드:', error.response.status);
//     } else {
//       console.error('에러 메시지:', error.message);
//     }
//     // @ts-ignore
//     const errorMessage = error.response?.data?.message;
//     if (
//       errorMessage === '리프레시 토큰이 만료되었습니다. 다시 로그인해 주세요.' ||
//       errorMessage === '리프레시 토큰의 값이 올바르지 않습니다.' ||
//       errorMessage === '일치하지 않는 리프레시 토큰입니다.'
//     ) {
//       console.log('리프레쉬 토큰 만료 메세지 인식 했다.');
//       handleTokenExpiration();
//     } else {
//       console.log('accessToken 재 요청 실패');
//     }
//   } else {
//     console.error('Axios 에러가 아닙니다:', error);
//   }
// }

// function handleTokenExpiration() {
//   localStorage.clear();
//   window.location.replace('/');
//   window.alert('토큰이 만료되어 자동으로 로그아웃 되었습니다.');
// }

// function updateTokens(newAccessToken: string, newRefreshToken: string) {
//   localStorage.setItem('EXIT_LOGIN_TOKEN', newAccessToken);
//   localStorage.setItem('EXIT_LOGIN_REFRESH_TOKEN', newRefreshToken);
//   axios.defaults.headers.Authorization = `Bearer ${newAccessToken}`;
// }

function interceptorResponseFulfilled(res: AxiosResponse) {
  return res.status >= 200 && res.status < 300 ? res.data : Promise.reject(res.data);
}

function interceptorResponseRejected(error: AxiosError) {
  // @ts-ignore
  return Promise.reject(new Error(error.response?.data?.message ?? error));
}

instance.interceptors.response.use(interceptorResponseFulfilled, interceptorResponseRejected);
