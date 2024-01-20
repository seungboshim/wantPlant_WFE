import React from "react";
import styled from "styled-components";
import { AiOutlinePlusCircle, AiFillEdit } from "react-icons/ai";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import GardenBox from "./GardenBox";
import NewGardenBox from "./NewGardenBox";

export default function GardenFooter() {
  return (
    <Wrapper>
      <WrapperTitleContainer>
        <WrapperTitle fontSize={15}>FROM OUR GARDEN</WrapperTitle>
        <WrapperTitle fontSize={35}>심어둔 정원으로 이동하기!</WrapperTitle>
      </WrapperTitleContainer>
      <WrapperGardenContainer>
        <GardenBox></GardenBox>
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
  margin: 0 80px;
  margin-top: 1409px;
  width: 1280px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WrapperTitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;

const WrapperTitle = styled.div`
  font-size: ${(props) => props.fontSize}px;
  font-weight: 1000;
  color: #739073;
`;

const WrapperGardenContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PaginationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

const PaginationLeftArrow = styled(IoIosArrowBack)`
  margin-right: 20px;
  cursor: pointer;
`;

const PaginationRightArrow = styled(IoIosArrowForward)`
  margin-left: 20px;
  cursor: pointer;
`;
const PageNumber = styled.div``;
