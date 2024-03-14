// import BookList from '../search/bookList/BookList';
import styled from 'styled-components';
import BookAddButton from './bookAdd/BookAddButton';
import EditInput from '../search/editInput/EditInput';

const AdminWrapper = styled.div`
  width: 100%;
  display: flex;
  top: 15%;
  position: absolute;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
`;

export default function Admin() {
  return (
    <>
      <AdminWrapper>
        <BookAddButton />
        <EditInput />
      </AdminWrapper>
    </>
  );
}
