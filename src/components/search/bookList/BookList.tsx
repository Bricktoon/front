import styled from 'styled-components';

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

export default function BookList() {
  // 목업 데이터
  const mockData = [
    { title: '책 제목 1', volume: 3, location: '위치 A' },
    { title: '책 제목 2', volume: 5, location: '위치 B' },
    { title: '책 제목 3', volume: 2, location: '위치 C' },
    { title: '책 제목 4', volume: 4, location: '위치 D' },
  ];

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
          {mockData.map((book, index) => (
            <tr key={index}>
              <Td>{index + 1}</Td>
              <TitleTd>{book.title}</TitleTd>
              <Td>{book.volume}</Td>
              <Td>{book.location}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </BookListWrapper>
  );
}
