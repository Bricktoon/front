import styled from 'styled-components';

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

export default function BookList({ books }: BookListProps) {
  return (
    <BookListWrapper>
      <Table>
        <thead>
          <tr>
            <Th>인덱스</Th>
            <TitleTh>책 제목</TitleTh>
            <Th>최종 권 수</Th>
            <Th>위치</Th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={index}>
              <Td>{index + 1}</Td>
              <TitleTd>{book.name}</TitleTd>
              <Td>{book.number}</Td>
              <Td>{book.location}</Td>
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
