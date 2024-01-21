import React from "react";
import { AiFillEdit } from "react-icons/ai";
import styled from "styled-components";

/** 다른 정원 가기 Box */
export default function GardenBox({ garden_title, garden_category, garden_description }) {
  // TODO : garden_id 받기
  return (
    <StyledGardenBox>
      <GardenBoxContentContainer>
        <GardenBoxContentTitle>
          {garden_title}
          <GardenBoxContentTitleIcon />
          {/** TODO : 정원 수정은 각 정원 들어가서만 가능할 수도 있어서 일단 기달 */}
        </GardenBoxContentTitle>
        <GardenBoxContentCategoryText>
          {garden_category}
        </GardenBoxContentCategoryText>
        <GardenBoxContentDesContainer>
          {garden_description}
        </GardenBoxContentDesContainer>
      </GardenBoxContentContainer>
      {/** TODO : 정원의 화분 id 받아 각 id에 맞는 화분 이미지 출력 */}
      <GardenBoxImageContaier>
        <GardenBoxImage></GardenBoxImage>
        <GardenBoxImage></GardenBoxImage>
        <GardenBoxImage></GardenBoxImage>
      </GardenBoxImageContaier>
    </StyledGardenBox>
  );
}

const StyledGardenBox = styled.div`
  width: 360px;
  height: 360px;
  border-radius: 10px;
  border: 1px solid ${({theme}) => theme.colors.strokeGray};
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 10px 0px #00000040;
`;

const GardenBoxImageContaier = styled.div`
  width: 100%;
  height: 20%;
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
  margin: 12px;
`;

const GardenBoxContentTitle = styled.div`
  margin-left: 10px;
  font-size: 20px;
`;

const GardenBoxContentTitleIcon = styled(AiFillEdit)`
  position: relative;
  top: 4px;
  left: 2px;
  font-size: 10px;
`;

const GardenBoxContentCategoryText = styled.div`
  margin: 10px 0 0 10px;
  font-size: 12px;
`;

const GardenBoxContentDesContainer = styled.div`
  margin-left: 10px;
  margin-top: 20px;
  width: 95%;
  height: 75%;
`;
