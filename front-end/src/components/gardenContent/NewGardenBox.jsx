import React from "react";
import styled from "styled-components";
import { AiOutlinePlusCircle } from "react-icons/ai";

/** 새 정원 만들기 Box */
export default function NewGardenBox() {
  return (
    <StyledNewGardenBox className="NewGardenBox">
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
  justify-content: space-evenly;
  align-items: center;
  color: ${({ theme }) => theme.colors.green05};

  @media (max-width: 1280px) {
    width: 350px;
    height: 350px;
    border-radius: 10px;
    margin: 0 10px;
  }
`;

const NewGardenBoxTitle = styled.span`
  font-size: 2.7vw;
  font-weight: 500;

  @media (max-width: 1280px) {
    font-size: 35px;
  }
`;

const StyledPlusCircle = styled(AiOutlinePlusCircle)`
  font-size: 3vw;

  @media (max-width: 1280px) {
    font-size: 40px;
  }
`;
