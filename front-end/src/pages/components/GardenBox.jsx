import React from "react";
import { AiFillEdit } from "react-icons/ai";
import styled from "styled-components";

export default function GardenBox() {
  return (
    <StyledGardenBox>
      <GardenBoxImageContaier>
        <GardenBoxImage></GardenBoxImage>
        <GardenBoxImage></GardenBoxImage>
        <GardenBoxImage></GardenBoxImage>
      </GardenBoxImageContaier>
      <GardenBoxContentContainer>
        <GardenBoxContentTitle>
          정원 이름
          <GardenBoxContentTitleIcon />
        </GardenBoxContentTitle>
        <GardenBoxContentCategoryText>카테고리</GardenBoxContentCategoryText>
        <GardenBoxContentDesContainer>
          ● 정원에 대한 설명을 입력해주세요.
        </GardenBoxContentDesContainer>
      </GardenBoxContentContainer>
    </StyledGardenBox>
  );
}

const StyledGardenBox = styled.div`
  width: 30vw;
  height: 26vw;
  border-radius: 10px;
  border: 1px solid black;
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 10px 0px #00000040;
`;

const GardenBoxImageContaier = styled.div`
  width: 100%;
  height: 20%;
  border: 1px solid black;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  align-self: flex-start;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const GardenBoxImage = styled.img`
  width: 20%;
  height: 80%;
`;

const GardenBoxContentContainer = styled.div`
  width: 100%;
  height: 80%;
  border: 1px solid black;
`;

const GardenBoxContentTitle = styled.div`
  margin-left: 10px;
  font-size: 20px;
`;

const GardenBoxContentTitleIcon = styled(AiFillEdit)`
  position: relative;
  top: 4px;
  left: 2px;
  font-size: 15px;
`;

const GardenBoxContentCategoryText = styled.div`
  margin-left: 10px;
  font-size: 10px;
`;

const GardenBoxContentDesContainer = styled.div`
  margin-left: 10px;
  margin-top: 20px;
  width: 95%;
  height: 75%;
`;
