import { useState } from 'react';
import styled from 'styled-components';
import { instance } from '../../../apis/Client';

interface Book {
  id: number;
  name: string;
  genre: string;
  location: string;
  number: number;
}

interface BookListProps {
  books: Book[];
}

export default function BookEdit({ books }: BookListProps) {
  const [editingBook, setEditingBook] = useState<Book | null>(null);
  const [editedName, setEditedName] = useState<string>('');
  const [editedNumber, setEditedNumber] = useState<number>(0);
  const [editedLocation, setEditedLocation] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleEdit = (book: Book) => {
    setEditingBook(book);
    setEditedName(book.name);
    setEditedNumber(book.number);
    setEditedLocation(book.location);
  };

  const handleSaveEdit = () => {
    if (editingBook) {
      instance
        .patch(`/book/${editingBook.id}`, {
          name: editedName,
          genre: editingBook.genre,
          location: editedLocation,
          number: editedNumber,
        })
        .then((response) => {
          console.log('책 정보 수정 완료:', response.data);
          setEditingBook(null);
          setShowModal(true); // 모달 표시
        })
        .catch((error) => {
          console.error('책 정보 수정 실패:', error);
          // 실패 처리
        });
    }
  };

  const handleDelete = (bookId: number) => {
    if (window.confirm('정말로 이 책을 삭제하시겠습니까?')) {
      instance
        .delete(`/book/${bookId}`)
        .then((response) => {
          console.log('책 삭제 완료:', response.data);
          setShowModal(true);
        })
        .catch((error) => {
          console.error('책 삭제 실패:', error);
        });
    }
  };

  const resetFields = () => {
    setShowModal(false);
    window.location.reload();
  };

  return (
    <BookListWrapper>
      <Table>
        <thead>
          <tr>
            <Th>인덱스</Th>
            <TitleTh>책 제목</TitleTh>
            <Th>최종 권 수</Th>
            <Th>위치</Th>
            <Th>수정</Th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={index}>
              <Td>{index + 1}</Td>
              <TitleTd onClick={() => handleEdit(book)}>
                {editingBook && editingBook.id === book.id ? (
                  <InputField
                    type='text'
                    value={editedName}
                    onChange={(e) => setEditedName(e.target.value)}
                  />
                ) : (
                  book.name
                )}
              </TitleTd>
              <Td onClick={() => handleEdit(book)}>
                {editingBook && editingBook.id === book.id ? (
                  <InputField
                    type='number'
                    value={editedNumber}
                    onChange={(e) => setEditedNumber(parseInt(e.target.value))}
                  />
                ) : (
                  book.number
                )}
              </Td>
              <Td onClick={() => handleEdit(book)}>
                {editingBook && editingBook.id === book.id ? (
                  <InputField
                    type='text'
                    value={editedLocation}
                    onChange={(e) => setEditedLocation(e.target.value)}
                  />
                ) : (
                  book.location
                )}
              </Td>
              <Td>
                {editingBook && editingBook.id === book.id ? (
                  <ButtonContainer>
                    <Button onClick={handleSaveEdit}>저장</Button>
                    <Button onClick={() => handleDelete(book.id)}>삭제</Button>{' '}
                    {/* 삭제 버튼 추가 */}
                  </ButtonContainer>
                ) : null}
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
      {showModal && (
        <Modal>
          <ModalContent>
            <p>책 정보가 수정되었습니다.</p>
            <Button onClick={resetFields}>확인</Button>
          </ModalContent>
        </Modal>
      )}
    </BookListWrapper>
  );
}

const BookListWrapper = styled.div`
  margin-top: 2rem;
`;

const Table = styled.table`
  width: 780px;
  margin-top: 5%;
  border-collapse: collapse;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Th = styled.th`
  background-color: #a2785d;
  color: white;
  border: 1px solid #ddd;
  padding: 0.5rem;
  text-align: left;
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 0.5rem;
`;

const TitleTd = styled(Td)`
  width: 370px;
`;

const TitleTh = styled(Th)`
  width: 370px;
`;

const InputField = styled.input`
  margin-right: 1rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  width: 5rem;
`;

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
