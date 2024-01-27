import React from "react";
import styled from "styled-components";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import GardenBox from "../../components/gardenContent/GardenBox";
import NewGardenBox from "../../components/gardenContent/NewGardenBox";
import img1 from "../../assets/images/logo_pot.svg";

/** 정원페이지 하단 컴포넌트 */
export default function GardenSecond() {
  return (
    <Wrapper className="GardenSecondWrapper">
      <WrapperTitleContainer className="WrapperTitleContainer">
        <WrapperTitle1>FROM OUR GARDEN</WrapperTitle1>
        <WrapperTitle2>심어둔 정원으로 이동하기!</WrapperTitle2>
      </WrapperTitleContainer>

      {/** TODO : 정원 배열 받고 반복 및 페이지네이션 처리 */}
      <WrapperGardenContainer className="WrapperGardenContainer">
        <GardenBox
          garden_title="정원 이름을 입력해주세요."
          garden_category="공부"
          garden_description="정원 1에 대한 설명이에요"
          garden_images={[img1, img1, img1]}
        />
        <GardenBox
          garden_title="정원 이름을 입력해주세요."
          garden_category="공부"
          garden_description="정원 1에 대한 설명이에요"
          garden_images={[img1, img1]}
        />
        <NewGardenBox></NewGardenBox>
      </WrapperGardenContainer>

      <PaginationContainer>
        <PaginationLeftArrow />
        <PageNumber>1</PageNumber>
        <PaginationRightArrow />
      </PaginationContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 92vw;
  height: 41vw;
  margin: 1vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 5px 0px #00000040;

  @media (max-width: 1280px) {
    margin-top: 70px;
    height: 600px;
    width: 1200px;
  }
`;

const WrapperTitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3.5%;
  margin-bottom: 3.2%;

  @media (max-width: 1280px) {
    margin-bottom: 40px;
  }
`;

const WrapperTitle1 = styled.div`
  font-size: 1.25vw;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.green05};

  @media (max-width: 1280px) {
    font-size: 15px;
  }
`;

const WrapperTitle2 = styled.div`
  font-size: 2.7vw;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.green05};

  @media (max-width: 1280px) {
    font-size: 35px;
  }
`;

const WrapperGardenContainer = styled.div`
  width: 95%;
  height: 23vw;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1280px) {
    height: 500px;
  }
`;

const PaginationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3%;
  margin-bottom: 1.5%;

  @media (max-width: 1280px) {
    margin-top: 40px;
    margin-bottom: 15px;
  }
`;

const PaginationLeftArrow = styled(IoIosArrowBack)`
  font-size: 25px;
  margin-right: 20px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.gray};
`;

const PaginationRightArrow = styled(IoIosArrowForward)`
  font-size: 25px;
  margin-left: 20px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.gray};
`;

const PageNumber = styled.div`
  color: ${({ theme }) => theme.colors.gray};
`;
