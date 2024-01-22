import React from "react";
import styled from "styled-components";
import StudyButton from "../makeGarden/StudyButton";
import ExerciseButton from "../makeGarden/ExerciseButton";
import HobbyButton from "../components/makeGardenContent/HobbyButton";

/** 정원 생성 페이지 */
export default function MakeGarden() {
  return (
      <Layout>
        <Category>
            <Title>
                키워갈 정원을 선택해주세요!
            </Title>
            <Subject>
                <StudyButton/>
                <ExerciseButton/>
                <HobbyButton/>
            </Subject>
        </Category>
      </Layout>
  );
}

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    width: 1280px;
    height: 832px;
    background: ${({ theme }) => theme.colors.green01};
`

const Category = styled.div`
    display: flex;
    flex-direction: column;
    width: 558px;
    height: 162px;
`
const Title = styled.p`
    width: 558px;
    height: 50px;
    font-size: 50px;
    color: #000000;
`

const Subject = styled.div`
    display: flex;
    flex-direction: row;
    width: 428px;
    height: 50px;
`

