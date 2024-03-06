import { QueryClient, QueryClientProvider, QueryErrorResetBoundary } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
// import router from './router/Router';
// import GlobalStyle from './style/GlobalStyle';
import styled from 'styled-components';

function App() {
  const Wrapper = styled.div`
    background-color: white;
    border: none;
  `;
  const queryClient = new QueryClient();

  return (
    <Wrapper>
      <QueryClientProvider client={queryClient}>
        <QueryErrorResetBoundary>
          {() => (
            <>
              {/* <RouterProvider router={router} />
              <GlobalStyle /> */}
            </>
          )}
        </QueryErrorResetBoundary>
      </QueryClientProvider>
    </Wrapper>
  );
}

export default App;
