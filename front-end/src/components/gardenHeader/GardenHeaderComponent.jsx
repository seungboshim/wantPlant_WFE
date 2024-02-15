import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getGardensForCategoryWithPage} from "../../apis/garden/getGarden";
import { useRecoilState } from "recoil";
import { StudyGardenCountAtom, ExerciseGardenCountAtom, HobbyGardenCountAtom } from "../../recoil/atom";

/** 정원 헤더 컴포넌트 (라벨, 배경색, 텍스트색 인자로 받음) */
export default function GardenHeaderComponent({
  label,
  bgColor,
  textColor,
  selected,
}) {
  const navigate = useNavigate();
  const [studyGardens, setStudyGardens] = useRecoilState(StudyGardenCountAtom);
  const [hobbyGardens, setHobbyGardens] = useRecoilState(HobbyGardenCountAtom);
  const [exerciseGardens, setExerciseGardens] = useRecoilState(ExerciseGardenCountAtom);

  useEffect(() => {
    if (label === "공부"){
      getGardensForCategoryWithPage({ page:1, category:'STUDY' }).then((garden)=> {
        setStudyGardens(garden);
      })
      console.log(studyGardens)
    } else if (label === "취미") {
      getGardensForCategoryWithPage({ page:1, category:'HOBBY' }).then((garden)=> {
        setHobbyGardens(garden);
      })
    } else if (label === "운동") {
      getGardensForCategoryWithPage({ page:1, category:'EXERCISE' }).then((garden)=> {
        setExerciseGardens(garden);
      })
    }
  }, [studyGardens.totalElements])

  
    /** 각 label에 해당하는 정원으로 navigate */
    const handleClick = () => {
      console.log(label);
      // TODO : 누르면 각 카테고리의 맨 처음 정원으로
      // TODO : 카테고리에 정원이 없다면 /garden/add로 ㄱㄱ
      if (label === "공부") {
        if (studyGardens.totalElements === 0) {
          navigate("/garden/add");
        } else {
          const initStudyGarden = studyGardens.gardenList[0].gardenId;
          console.log(initStudyGarden)
          navigate(`/garden/${initStudyGarden}`);
        }
      } else if (label === "취미") {
        if (hobbyGardens.totalElements === 0) {
          navigate("/garden/add");
        } else {
          const initHobbyGarden = hobbyGardens.gardenList[0].gardenId;
          navigate(`/garden/${initHobbyGarden}`);
        }
      } else if (label === "운동") {
        if (exerciseGardens.totalElements === 0) {
          navigate("/garden/add");
        } else {
          const initExerciseGarden = exerciseGardens.gardenList[0].gardenId;
          navigate(`/garden/${initExerciseGarden}`);
        }
      }
    };
    
    // 선택되었을 때엔 커진 버튼
    if (selected) {
        return (
            <SelectedWrapper color={bgColor} onClick={handleClick}>
                <SelectedText color={textColor}>{label}</SelectedText>
            </SelectedWrapper>
        )
    } else { 
        return (
            <Wrapper color={bgColor} onClick={handleClick}>
                <Text color={textColor}>{label}</Text>
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1vw 1vw 0 0;
  width: 4.5vw;
  height: 2.4vw;
  background-color: ${({ color, theme }) => theme.colors[color]};
  margin: 0 2px;
  cursor: pointer;

  @media (max-width: 1280px) {
    border-radius: 15px 15px 0 0;
    width: 60px;
    height: 30px;
  }
`;

const SelectedWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1vw 1vw 0 0;
  width: 4.5vw;
  height: 3.1vw;
  background-color: ${({ color, theme }) => theme.colors[color]};
  margin: 0 2px;
  cursor: pointer;

  @media (max-width: 1280px) {
    border-radius: 15px 15px 0 0;
    width: 60px;
    height: 40px;
  }
`;

const Text = styled.span`
  font-size: 1.2vw;
  padding: 2px 12px;
  border-radius: 15px;
  color: ${({ color }) => color};
  transition: background-color 0.25s;

  ${Wrapper}:hover &{
    background-color: rgba(236, 243, 232, 0.4);
  }

  @media (max-width: 1280px) {
    font-size: 16px;
  }
`;

const SelectedText = styled.span`
  font-size: 1.5vw;
  color: ${({ color }) => color};

  @media (max-width: 1280px) {
    font-size: 20px;
  }
`;
