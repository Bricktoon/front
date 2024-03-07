import BookList from '../search/bookList/BookList';
import styled from 'styled-components';
import BookAddButton from './bookAdd/BookAddButton';

const AdminWrapper = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  top: 15%;
  align-items: center;
  flex-direction: column;
`;

export default function Admin() {
  return (
    <>
      <AdminWrapper>
        <BookAddButton />
        <BookList />
      </AdminWrapper>
    </>
  );
}
