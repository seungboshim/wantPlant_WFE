import React from "react";
import styled from "styled-components";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import GardenBox from "../../components/gardenContent/GardenBox";
import NewGardenBox from "../../components/gardenContent/NewGardenBox";

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
        />
        <NewGardenBox></NewGardenBox>
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
  width: 87vw;
  height: 44vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1280px) {
    margin-top: 70px;
    height: 600px;
    width: 1120px;
  }
`;

const WrapperTitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 6%;

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
  width: 100%;
  height: 30vw;
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
  margin-top: 40px;
  margin-bottom: 30px;
`;

const PaginationLeftArrow = styled(IoIosArrowBack)`
  margin-right: 20px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.gray};
`;

const PaginationRightArrow = styled(IoIosArrowForward)`
  margin-left: 20px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.gray};
`;

const PageNumber = styled.div`
  color: ${({ theme }) => theme.colors.gray};
`;
