import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  width: 100%;
  background-color: #191769;
  color: white;
  position: fixed;
  top: 0;

  z-index: 1000;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  left: 47%;
  position: absolute;
`;

const Location = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const LogoutButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #191769;
  color: #a9a9a9;
  border: 1px solid #302f62;
  border-radius: 4px;
  cursor: pointer;
`;

export default function Header() {
  const place: string | null = localStorage.getItem('place');

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('place');
    navigate('/');
  };
  return (
    <HeaderWrapper>
      <HeaderContent>
        <Location>{place}</Location>
        <Logo>콩툰</Logo>
        <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
      </HeaderContent>
    </HeaderWrapper>
  );
}
