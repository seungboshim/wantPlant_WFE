import React from "react";
//import {useState, useEffect} from "react";
import styled from "styled-components";
// import StudyButton from "../../components/makeGardenContent/StudyButton";
// import ExerciseButton from "../../components/makeGardenContent/ExerciseButton";
// import HobbyButton from "../../components/makeGardenContent/HobbyButton";
import Buttons from "../../components/makeGardenContent/Buttons";
import InputName from "../../components/makeGardenContent/InputName";
import InputExplain from "../../components/makeGardenContent/InputExplain";

/** 정원 생성 페이지 */
export default function MakeGarden() {
    //const buttons = [<StudyButton/>, <ExerciseButton/>, <HobbyButton/>];
  return (
      <Layout>
        <Category>
            <Title>
                키워갈 정원을 선택해주세요!
            </Title>
            <Buttons/>
        </Category>
        <Input>
            <InputName/>
            <InputExplain/>
        </Input>
      </Layout>
  );
}

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1280px;
    height: 832px;
    background: ${({ theme }) => theme.colors.green01};
`

const Category = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 558px;
    height: 162px;
    margin-top: 312px;
    gap: 66px;
`
const Title = styled.span`
    width: 558px;
    height: 50px;
    font-size: 42px;
    font-weight: 700;
    color: #000000;
`

// const Subject = styled.div`
//     display: flex;
//     flex-direction: row;
//     width: 428px;
//     height: 50px;
//     gap: 40px;
// `
const Input = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 700px;
    height: 170px;
    margin-top: 120px;
    gap: 10px;
`
