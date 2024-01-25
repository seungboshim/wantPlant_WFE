import React from "react";
// import { AiFillEdit } from "react-icons/ai";
import styled from "styled-components";

/** 다른 정원 가기 Box */
export default function GardenBox({
  garden_title,
  garden_category,
  garden_description,
  garden_images,
}) {
  // TODO : garden_id 받기
  return (
    <StyledGardenBox className="GardenBox">
      <GardenBoxContentContainer>
        <GardenBoxImageContaier>
          {garden_images.map((img_url) => {
            return <GardenBoxImage img_url={img_url}></GardenBoxImage>;
          })}
        </GardenBoxImageContaier>
        <GardenBoxContentTitle>
          {garden_title}
          {/* <GardenBoxContentTitleIcon /> */}
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
    </StyledGardenBox>
  );
}

const StyledGardenBox = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border: 1px solid rgba(${({ theme }) => theme.colors.strokeGray}, 0.5);
  margin: 0 1.5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 10px 0px #00000040;

  @media (max-width: 1280px) {
    width: 360px;
    height: 360px;
    border-radius: 10px;
    margin: 0 10px;
  }
`;

const GardenBoxContentContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const GardenBoxImageContaier = styled.div`
  width: 100%;
  height: 41%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.pink02};
  background-color: ${({ theme }) => theme.colors.pink02};
`;

const GardenBoxImage = styled.div`
  width: 20%;
  height: 80%;
  margin: 3%;
  background: url(${(props) => props.img_url}) no-repeat center;
  background-size: contain;
`;

const GardenBoxContentTitle = styled.div`
  width: 100%;
  height: 10%;
  margin: 15px;
  margin-bottom: 0px;
  font-size: 1vw;
  color: ${({ theme }) => theme.colors.strokeGray};
  @media (max-width: 1280px) {
    font-size: 14px;
  }
`;

// const GardenBoxContentTitleIcon = styled(AiFillEdit)`
//   position: relative;
//   top: 4px;
//   left: 2px;
//   font-size: 1vw;
//   color: ${({ theme }) => theme.colors.strokeGray};

//   @media (max-width: 1280px) {
//     font-size: 14px;
//   }
// `;

const GardenBoxContentCategoryText = styled.div`
  width: 100%;
  height: 10%;
  margin: 0 15px;
  font-size: 1vw;
  color: ${({ theme }) => theme.colors.strokeGray};

  @media (max-width: 1280px) {
    font-size: 14px;
  }
`;

const GardenBoxContentDesContainer = styled.div`
  width: 100%;
  height: 10%;
  font-size: 1vw;
  margin: 0 15px;
  color: ${({ theme }) => theme.colors.strokeGray};

  @media (max-width: 1280px) {
    font-size: 14px;
  }
`;
