import React from "react";
import styled from "styled-components";
import { FaCirclePlus } from "react-icons/fa6";

/** 새 정원 만들기 Box */
export default function NewGardenBox(props) {
    return (
        <StyledNewGardenBox
            className="NewGardenBox"
            onClick={() => {
                props.addGardenBtnHandler();
            }}
        >
            <NewGardenBoxTitle>새 정원 만들기</NewGardenBoxTitle>
            <StyledPlusCircle />
        </StyledNewGardenBox>
    );
}

const StyledNewGardenBox = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 1vw;
    border: 7px dashed ${({ theme }) => theme.colors.green01};
    margin: 0 1%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.green05};
    cursor: pointer;

    @media (max-width: 1280px) {
        width: 350px;
        height: 350px;
        border-radius: 10px;
        margin: 0 10px;
    }
`;

const NewGardenBoxTitle = styled.span`
    font-size: 2vw;
    font-weight: 1000;
    margin-bottom: 5vw;

    @media (max-width: 1280px) {
        font-size: 32px;
        margin-bottom: 70px;
    }
`;

const StyledPlusCircle = styled(FaCirclePlus)`
    font-size: 2.7vw;
    margin-bottom: 5vw;

    @media (max-width: 1280px) {
        font-size: 33px;
        margin-bottom: 80px;
    }
`;
