import styled from 'styled-components';

const HeaderWrapper = styled.header`
  width: 100%;
  height: 80px;
  background-color: #191769;
  color: white;
  position: fixed;
  top: 0;

  z-index: 1000;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
`;

const Logo = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const Location = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <Location>대학로점</Location>
        <Logo>콩툰</Logo>
      </HeaderContent>
    </HeaderWrapper>
  );
}
