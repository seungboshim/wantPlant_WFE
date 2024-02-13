import styled from "styled-components";
import { useNavigate } from "react-router-dom";

/** 정원 헤더 컴포넌트 (라벨, 배경색, 텍스트색 인자로 받음) */
export default function GardenHeaderComponent({
  label,
  bgColor,
  textColor,
  selected,
}) {
  const navigate = useNavigate();

    /** 각 label에 해당하는 정원으로 navigate */
    const handleClick = () => {
      console.log(label);
        // TODO : 누르면 각 카테고리의 맨 처음 정원으로
        // TODO : 카테고리에 정원이 없다면 /garden/add로 ㄱㄱ
        if (label === "공부") {
            navigate("/garden/study");
        } else if (label === "취미") {
            navigate("/garden/hobby");
        } else if (label === "운동") {
            navigate("/garden/exercise");
        } else if (label === "캘린더") {
            navigate("/calender");
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
  color: ${({ color }) => color};

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
