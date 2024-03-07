import styled from 'styled-components';

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 2rem;
  width: 50%;
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

export default function LoginInput() {
  return (
    <LoginWrapper>
      <InputField type='text' placeholder='아이디를 입력하세요' />
      <InputField type='password' placeholder='비밀번호를 입력하세요' />
      <Button>로그인</Button>
    </LoginWrapper>
  );
}
