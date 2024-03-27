// Input.tsx
import { useState } from 'react';
import styled from 'styled-components';
import { instance } from '../../../apis/Client';
import BookList from '../bookList/BookList';

interface BookData {
  id: number;
  name: string;
  genre: string;
  location: string;
  number: number;
}

export default function Input() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchOption, setSearchOption] = useState('도서명');
  const [searchResults, setSearchResults] = useState<BookData[]>([]);

  const handleSearch = async () => {
    try {
      const response = await instance.get<any, any>(
        `/book/list?type=${searchOption}&keyword=${searchTerm}`,
      );
      if (response) {
        console.log('성공', response.result);
        setSearchResults(response.result);
      } else {
        console.error('서버에서 도서 목록을 가져오지 못했습니다.');
      }
    } catch (error) {
      console.error('서버 오류:', error);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleReset = () => {
    setSearchTerm('');
    setSearchResults([]); // 리셋할 때 검색 결과 초기화
  };

  return (
    <>
      <InputWrapper>
        <Select value={searchOption} onChange={(e) => setSearchOption(e.target.value)}>
          <option value='도서명'>도서명</option>
          <option value='장르'>장르</option>
        </Select>
        <InputField
          type='text'
          placeholder='검색어를 입력하세요'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyPress} // 엔터키 이벤트 핸들러 추가
        />
        <ButtonWrapper>
          <Button onClick={handleSearch}>검색</Button>
          <Button onClick={handleReset}>초기화</Button>
        </ButtonWrapper>
      </InputWrapper>
      <BookList books={searchResults} />
    </>
  );
}

const InputWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
`;

const Select = styled.select`
  margin-right: 1rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const InputField = styled.input`
  margin-right: 1rem;
  width: 500px;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button``;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;
