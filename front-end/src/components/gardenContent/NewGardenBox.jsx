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
  width: 30%;
  height: 80%;
  border-radius: 10px;
  border: 7px dashed ${({ theme }) => theme.colors.green01};
  margin: 0 1%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  color: ${({ theme }) => theme.colors.green05};
`;

const NewGardenBoxTitle = styled.span`
  font-size: 35px;
  font-weight: 500;
`;

const StyledPlusCircle = styled(AiOutlinePlusCircle)`
  font-size: 40px;
`;
