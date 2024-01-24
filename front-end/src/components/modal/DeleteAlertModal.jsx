import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Modal from "react-modal";
import logo_pot from "../../assets/images/logo_pot.svg";

export default function DeleteAlertModal({
  isOpen,
  data,
  DeleteAlertModalHandler,
}) {
  Modal.setAppElement("#root");

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
      width: "434px",
      height: "250px",
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
        <ModalTextWrapper>정말로 {data} 삭제하시겠어요?</ModalTextWrapper>
        <ModalButtonWrapper>
          <ModalButton
            isdelete="true"
            onClick={() => DeleteAlertModalHandler(false)}
          >
            삭제
          </ModalButton>
          <ModalButton onClick={() => DeleteAlertModalHandler(false)}>
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
  position: relative;
`;

/* ModalTitleImage */
const ModalImageWrapper = styled.div`
  width: 100%;
  height: 28%;
  margin-bottom: 10px;
`;

const PotIcon = styled.img.attrs({
  src: logo_pot,
})`
  width: 100%;
  height: 100%;
`;

const ModalTextWrapper = styled.div`
  width: 100%;
  height: 20%;
  margin: 30px 0px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: 700;
`;

/* Modal Button */
const ModalButtonWrapper = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalButton = styled.button`
  margin: 20px;
  height: 70%;
  width: 25%;
  border-radius: 20px;
  border: 2px solid #5c846d;
  background-color: #f4fff2;
  color: #5c846d;
  font-size: 25px;
  font-weight: 500;

  ${(props) =>
    props.isdelete &&
    css`
      background-color: ${({ theme }) => theme.colors.green06};
      color: white;
    `};
`;
