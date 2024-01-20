import React from "react";
import styled from "styled-components";
import { AiOutlinePlusCircle } from "react-icons/ai";

export default function NewGardenBox() {
  return (
    <StyledNewGardenBox>
      <NewGardenBoxTitle>새 정원 만들기</NewGardenBoxTitle>
      <StyledPlusCircle />
    </StyledNewGardenBox>
  );
}

const StyledNewGardenBox = styled.div`
  width: 350px;
  height: 350px;
  border-radius: 10px;
  border: 10px dashed rgba(0, 200, 0, 0.2);
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  color: ${({theme}) => theme.colors.green05};
`;

const NewGardenBoxTitle = styled.span`
  font-size: 36px;
  font-weight: 500;
`

const StyledPlusCircle = styled(AiOutlinePlusCircle)`
  font-size: 40px;
`;