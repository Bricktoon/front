import { useState } from 'react';
import styled from 'styled-components';
import { instance } from '../../../apis/Client';

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

export default function Input() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchOption, setSearchOption] = useState('도서명');

  const handleSearch = async () => {
    try {
      const response = await instance.get(`/book/list?type=${searchOption}&keyword=${searchTerm}`);
      if (response && response.data && response.data.code === 'SUCCESS') {
        // 검색 결과 처리
        console.log(response.data.result);
      } else {
        console.error('서버에서 도서 목록을 가져오지 못했습니다.');
      }
    } catch (error) {
      console.error('서버 오류:', error);
    }
  };

  const handleReset = () => {
    setSearchTerm('');
  };

  return (
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
      />
      <ButtonWrapper>
        <Button onClick={handleSearch}>검색</Button>
        <Button onClick={handleReset}>초기화</Button>
      </ButtonWrapper>
    </InputWrapper>
  );
}
