import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Modal from "react-modal";
import logo_pot from "../../assets/images/logo_pot.svg";

export default function EditGardenModal({ isOpen, EditGardenModalHandler }) {
  Modal.setAppElement("#root");
  const categories = ["공부", "운동", "취미"];
  const [selectedCategoryIdx, setSelectedCategoryIdx] = useState("");

  /* 모달 창을 켜고 닫을 때 selectedCategoryIdx가 저장되어있는게 그대로 유지되는 현상 방지 */
  useEffect(() => {
    setSelectedCategoryIdx("");
  }, [isOpen]);

  /* react-modal style props 속성 */
  const customStyles = {
    overlay: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(255, 255, 255, 0.3)",
    },
    content: {
      top: "auto",
      left: "auto",
      right: "auto",
      bottom: "auto",
      transform: "none",
      backgroundColor: "#F4FFF2",
      borderRadius: "20px",
      width: "634px",
      height: "650px",
      padding: "20px",
      border: "1px solid black",
    },
  };

  return (
    <ModalContainer isOpen={isOpen} style={customStyles}>
      <ModalContent>
        <ModalImageWrapper>
          <PotIcon alt="Pot Icon" />
        </ModalImageWrapper>
        <ModalSelectCategoryContainer>
          <ModalSelectCategoryTitleWrapper>
            <ModalSelectCategoryTitle>
              정원 카테고리를 선택해주세요.
            </ModalSelectCategoryTitle>
          </ModalSelectCategoryTitleWrapper>
          <ModalSelectCategoriesWrapper>
            {categories.map((category, idx) => {
              return (
                <ModalSelectCategoryButton
                  key={idx}
                  onClick={() => setSelectedCategoryIdx(idx)}
                  selected={selectedCategoryIdx === idx}
                >
                  {category}
                </ModalSelectCategoryButton>
              );
            })}
          </ModalSelectCategoriesWrapper>
        </ModalSelectCategoryContainer>
        <ModalInputGardenNameWrapper>
          <ModalGardenNameInput placeholder="정원 이름을 입력해주세요." />
        </ModalInputGardenNameWrapper>
        <ModalInputGardenDesWrapper>
          <ModalGardenDesInput placeholder="정원에 대한 설명을 입력해주세요."></ModalGardenDesInput>
        </ModalInputGardenDesWrapper>
        <ModalButtonWrapper>
          <ModalButton
            iscomplete="true"
            onClick={() => EditGardenModalHandler(false)}
          >
            완료
          </ModalButton>
          <ModalButton onClick={() => EditGardenModalHandler(false)}>
            취소
          </ModalButton>
        </ModalButtonWrapper>
      </ModalContent>
    </ModalContainer>
  );
}

/* Modal */
const ModalContainer = styled(Modal)``;

const ModalContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

/* ModalTitleImage */
const ModalImageWrapper = styled.div`
  width: 100%;
  height: 18%;
  margin-bottom: 20px;
`;

const PotIcon = styled.img.attrs({
  src: logo_pot,
})`
  width: 100%;
  height: 100%;
`;

/* Category */
const ModalSelectCategoryContainer = styled.div`
  width: 75%;
  height: 15%;
  border: 1px solid black;
  border-radius: 20px;
  background-color: white;
  margin: 10px 0px;
`;

const ModalSelectCategoryTitleWrapper = styled.div`
  width: 100%;
  height: 40%;
`;

const ModalSelectCategoryTitle = styled.h3`
  margin: 0;
  padding-left: 15px;
  padding-top: 5px;
`;

const ModalSelectCategoriesWrapper = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalSelectCategoryButton = styled.button`
  border-radius: 20px;
  width: 14%;
  height: 55%;
  margin: 0px 20px;
  font-size: 18px;
  background-color: white;
  color: ${({ theme }) => theme.colors.green06};
  border: 1px solid ${({ theme }) => theme.colors.green06}; // 테두리 두께 1px, 색상 설정

  ${(props) =>
    props.selected &&
    css`
      background-color: ${({ theme }) => theme.colors.green06};
      color: white;
    `};
`;

/* Modal Input Name */
const ModalInputGardenNameWrapper = styled.div`
  width: 75%;
  height: 10%;
  border: 1px solid black;
  border-radius: 20px;
  background-color: white;
  margin: 10px 0px;
`;

const ModalGardenNameInput = styled.input`
  width: 95%;
  height: 80%;
  border: none;
  margin-top: 7px;
  margin-bottom: 7px;
  margin-left: 15px;
  padding: 0;
  font-size: 18px;
  &:focus {
    outline: none;
  }
`;

/* Modal Input Description */
const ModalInputGardenDesWrapper = styled.div`
  width: 75%;
  height: 30%;
  border: 1px solid black;
  border-radius: 20px;
  background-color: white;
  margin: 10px 0px;
`;

const ModalGardenDesInput = styled.textarea`
  width: 94%;
  height: 80%;
  border: none;
  margin: 15px 15px;
  padding: 0;
  font-size: 18px;
  &:focus {
    outline: none;
  }
  resize: none;
`;

/* Modal Button */
const ModalButtonWrapper = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

const ModalButton = styled.button`
  margin: 20px;
  height: 70%;
  width: 23%;
  border-radius: 20px;
  border: 2px solid ##5c846d;
  background-color: #f4fff2;
  color: #5c846d;
  font-size: 25px;
  font-weight: 500;

  ${(props) =>
    props.iscomplete &&
    css`
      background-color: ${({ theme }) => theme.colors.green06};
      color: white;
    `};
`;
