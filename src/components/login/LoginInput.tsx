import styled from 'styled-components';
import LoginLogo from '../../assets/login.png';

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 2rem 2rem 0 2rem;
  width: 35%;
  height: 400px;
  margin: 0 auto;
  top: 50%;
  position: relative;
  transform: translateY(-50%);
`;

const InputField = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #ffffff;
  cursor: pointer;
`;

const Logo = styled.img`
  width: 150px;
  padding: 5%;
  margin-bottom: 3rem;
`;

export default function LoginInput() {
  return (
    <LoginWrapper>
      <Logo src={LoginLogo} alt='logo' />
      <InputField type='text' placeholder='아이디를 입력하세요' />
      <InputField type='password' placeholder='비밀번호를 입력하세요' />
      <Button>로그인</Button>
    </LoginWrapper>
  );
}
