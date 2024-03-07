import LoginInput from '../components/login/LoginInput';
import styled from 'styled-components';

const LoginWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #191769;
`;

export default function LoginPage() {
  return (
    <>
      <LoginWrapper>
        <LoginInput />
      </LoginWrapper>
    </>
  );
}