import { useState } from 'react';
import styled from 'styled-components';
import { instance } from '../../../apis/Client';

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 61%;
`;

const Button = styled.button``;

const ButtonAdd = styled.button`
  background-color: #a2785d;
  color: white;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 8px;
`;

const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  width: 30px;
  top: 0.5rem;
  margin-bottom: 2rem;
`;

const BookInfoWrapper = styled.article`
  display: flex;
  margin-bottom: 2rem;
  gap: 0.5rem;
`;

const ButtonAddFile = styled.label`
  background-color: #a2785d;
  color: white;
  padding: 0.5rem;
  border-radius: 4px;
  cursor: pointer;
`;

const ButtonAddExcel = styled.button`
  background-color: #a2785d;
`;

const FileInput = styled.input`
  display: none;
`;
export default function BookAddButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [bookInfo, setBookInfo] = useState({
    name: '',
    genre: '',
    location: '',
    number: 0,
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await instance.post('/book/all', formData);

      if (response && response.data) {
        console.log('파일 업로드 성공');
      } else {
        console.error('파일 업로드 실패');
      }
    } catch (error) {
      console.error('파일 업로드 중 오류 발생:', error);
    }
  };

  const handleAddBook = async () => {
    try {
      const response = await instance.post('/book', bookInfo);

      if (response && response.data) {
        console.log('책 추가 성공:', response.data);
      } else {
        console.error('책 추가 실패');
      }
    } catch (error) {
      console.error('책 추가 중 오류 발생:', error);
    }
  };

  const handleSearch = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setBookInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <InputWrapper>
        <p>헤화역점</p>
        <ButtonWrapper>
          <Button onClick={handleSearch}>+</Button>
        </ButtonWrapper>
      </InputWrapper>

      {isModalOpen && (
        <ModalBackground>
          <ModalContent>
            <CloseButton onClick={handleCloseModal}>X</CloseButton>
            <BookInfoWrapper>
              <label>책 제목</label>
              <input
                type='text'
                placeholder='책 제목 입력'
                name='name'
                value={bookInfo.name}
                onChange={handleInputChange}
              />
              <label>장르</label>
              <input
                type='text'
                placeholder='장르 입력'
                name='genre'
                value={bookInfo.genre}
                onChange={handleInputChange}
              />
              <label>권수</label>
              <input
                type='number'
                placeholder='최종 권수 입력'
                name='number'
                value={bookInfo.number}
                onChange={handleInputChange}
              />
              <label>위치</label>
              <input
                type='text'
                placeholder='위치 입력'
                name='location'
                value={bookInfo.location}
                onChange={handleInputChange}
              />
            </BookInfoWrapper>
            <ButtonAdd onClick={handleAddBook}>추가하기</ButtonAdd>
            <ButtonAddFile>
              파일 추가하기
              <FileInput type='file' accept='.xlsx, .xls, .csv' onChange={handleFileChange} />
            </ButtonAddFile>
            <ButtonAddExcel onClick={handleUpload}> 파일</ButtonAddExcel>
          </ModalContent>
        </ModalBackground>
      )}
    </>
  );
}
