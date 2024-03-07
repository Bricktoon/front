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
