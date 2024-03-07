import BookList from './bookList/BookList';
import Input from './input/Input';
import styled from 'styled-components';

const SearchWrapper = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  top: 15%;
  align-items: center;
  flex-direction: column;
`;

export default function Search() {
  return (
    <>
      <SearchWrapper>
        <Input />
        <BookList />
      </SearchWrapper>
    </>
  );
}
