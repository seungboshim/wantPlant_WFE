import React from "react";
import styled from "styled-components";
import { AiOutlinePlusCircle, AiFillEdit } from "react-icons/ai";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import GardenBox from "./GardenBox";
import NewGardenBox from "./NewGardenBox";

export default function GardenFooter() {
  return (
    <Wrap>
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
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 1280px;
  margin-top: 70px;
`

const Wrapper = styled.div`
  margin: 0 80px;
  height: 600px;
  display: flex;
  flex-direction: column;
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
  font-weight: 600;
  color: ${({theme}) => theme.colors.green05}
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
  margin-top: 40px;
  margin-bottom: 30px;
`;

const PaginationLeftArrow = styled(IoIosArrowBack)`
  margin-right: 20px;
  cursor: pointer;
  color: ${({theme}) => theme.colors.gray}
`;

const PaginationRightArrow = styled(IoIosArrowForward)`
  margin-left: 20px;
  cursor: pointer;
  color: ${({theme}) => theme.colors.gray}
`;

const PageNumber = styled.div`
  color: ${({theme}) => theme.colors.gray}
`;
