import styled from "styled-components";

import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function DeleteTagModal(props) {
    return (
        <Modal
            isOpen={props.isDeleteTagModalOn}
            contentLabel="Delete Confirmation"
            style={{
                overlay: { backgroundColor: "rgba(255, 255, 255, 0.3)" },
                content: {
                    color: "lightsteelblue",
                    position: "relative",
                    width: "25%",
                    height: "20%",
                    top: "50%",
                    left: "50%",
                    right: "auto",
                    bottom: "auto",
                    transform: "translate(-50%, -50%)",
                    boxShadow: "0px 0px 10px 0px gray",
                },
            }}
        >
            <h2>태그를 삭제하시겠습니까?</h2>
            <ModalButtonWrapper>
                <ModalButton
                    onClick={() => {
                        props.deleteTagHandler();
                        props.deleteTagModalHandler(false);
                        props.updateCalender(true);
                    }}
                >
                    삭제
                </ModalButton>
                <ModalButton onClick={() => props.deleteTagModalHandler(false)}>닫기</ModalButton>
            </ModalButtonWrapper>
        </Modal>
    );
}

const ModalButtonWrapper = styled.div`
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalButton = styled.button`
    width: 30%;
    height: 40%;
    margin: 5%;
    border-radius: 15px;
    /* border: none; */
`;
