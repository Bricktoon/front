import { useState } from 'react';
import styled from 'styled-components';

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

export default function BookAddButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearch = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
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
              <input type='text' placeholder='책 제목 입력' />
              <label>장르</label>
              <input type='text' placeholder='장르 입력' />
              <label>권수</label>
              <input type='number' placeholder='최종 권수 입력' />
              <label>위치</label>
              <input type='text' placeholder='위치 입력' />
            </BookInfoWrapper>
            <ButtonAdd>추가하기</ButtonAdd>
          </ModalContent>
        </ModalBackground>
      )}
    </>
  );
}
