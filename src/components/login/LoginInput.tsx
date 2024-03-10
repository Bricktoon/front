import { useState } from 'react';
import styled from 'styled-components';
import LoginLogo from '../../assets/login.png';
import { cleanHeaderInstance } from '../../apis/Client';
import { useNavigate } from 'react-router-dom';

interface ApiResponseData {
  result: {
    id: number;
    accessToken: string;
  };
}

export default function LoginInput() {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>(''); // 아이디 입력값을 위한 상태
  const [password, setPassword] = useState<string>(''); // 비밀번호 입력값을 위한 상태

  const handleLogin = async () => {
    try {
      const response = await cleanHeaderInstance.post<ApiResponseData>('/auth', {
        username: username,
        password: password,
      });

      if (response.status === 200) {
        console.log('로그인 성공', response);
        localStorage.setItem('accessToken', response.data.result.accessToken);
        const userId = response.data.result.id;
        if (userId === 2) {
          navigate('/admin');
        } else if (userId === 4) {
          navigate('/main');
        } else {
          console.error('알 수 없는 사용자 ID입니다.');
        }
      } else {
        console.error('로그인 실패');
      }
    } catch (error) {
      console.error('서버 오류:', error);
    }
  };
  return (
    <LoginWrapper>
      <Logo src={LoginLogo} alt='logo' />
      <InputField
        type='text'
        placeholder='아이디를 입력하세요'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <InputField
        type='password'
        placeholder='비밀번호를 입력하세요'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleLogin}>로그인</Button>
    </LoginWrapper>
  );
}

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
