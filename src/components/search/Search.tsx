import Input from './input/Input';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function Search() {
  const navigate = useNavigate();
  const handleLogout = () => {
    // 로그아웃 로직 구현
    localStorage.removeItem('accessToken');
    navigate('/');
    // 로그아웃 후에는 로그인 페이지로 이동하도록 설정할 수 있습니다.
  };

  return (
    <>
      <SearchWrapper>
        <Input />
        <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
      </SearchWrapper>
    </>
  );
}

const SearchWrapper = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  top: 15%;
  align-items: center;
  flex-direction: column;
`;

const LogoutButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #878787;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
