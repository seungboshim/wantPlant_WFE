import React from "react";
import styled from "styled-components";
import { AiOutlinePlusCircle } from "react-icons/ai";

export default function NewGardenBox() {
  return (
    <StyledNewGardenBox>
      <h1 style={{ margin: 0 }}>새 정원 만들기</h1>
      <AiOutlinePlusCircle
        style={{ fontSize: "40px", color: "green", marginBottom: "1.5em" }}
      />
    </StyledNewGardenBox>
  );
}

const StyledNewGardenBox = styled.div`
  width: 30vw;
  height: 25vw;
  border-radius: 10px;
  border: 10px dashed rgba(0, 200, 0, 0.2);
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  color: #739073;
`;
