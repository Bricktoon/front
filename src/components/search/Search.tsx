import Input from './input/Input';
import styled from 'styled-components';

export default function Search() {
  return (
    <>
      <SearchWrapper>
        <Input />
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
