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
          // PATCH 요청 보내기
          name: editedName,
          genre: editingBook.genre, // 장르는 그대로 유지
          location: editedLocation,
          number: editedNumber,
        })
        .then((response) => {
          console.log('책 정보 수정 완료:', response.data);
          setEditingBook(null);
        })
        .catch((error) => {
          console.error('책 정보 수정 실패:', error);
          // 실패 처리
        });
    }
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
                  <Button onClick={handleSaveEdit}>저장</Button>
                ) : null}
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
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
`;
