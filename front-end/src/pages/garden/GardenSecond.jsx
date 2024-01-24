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
        <WrapperTitle fontSize={15}>FROM OUR GARDEN</WrapperTitle>
        <WrapperTitle fontSize={35}>심어둔 정원으로 이동하기!</WrapperTitle>
      </WrapperTitleContainer>

      {/** TODO : 정원 배열 받고 반복 및 페이지네이션 처리 */}
      <WrapperGardenContainer className="WrapperGardenContainer">
        <GardenBox
          garden_title="정원 1"
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
  margin-top: 70px;
  width: 100%;
  height: 60vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WrapperTitleContainer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;

const WrapperTitle = styled.div`
  font-size: ${(props) => props.fontSize}px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.green05};
`;

const WrapperGardenContainer = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
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
