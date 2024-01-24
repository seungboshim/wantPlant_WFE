import styled from "styled-components";
import { useNavigate } from "react-router-dom";

/** 정원 헤더 컴포넌트 (라벨, 배경색, 텍스트색 인자로 받음) */
export default function GardenHeaderComponent({ label, bgColor, textColor, selected }) {
    const navigate = useNavigate();

    /** 각 label에 해당하는 정원으로 navigate */
    const handleClick = () => {
        // TODO : 누르면 각 카테고리의 맨 처음 정원으로
        // TODO : 카테고리에 정원이 없다면 /garden/add로 ㄱㄱ
        if (label === "공부") {
            navigate("/garden/study");
        } else if (label === "취미") {
            navigate("/garden/hobby");
        } else if (label === "운동") {
            navigate("/garden/exercise");
        }
    };
    
    // 선택되었을 때엔 커진 버튼
    if (selected) {
        return (
            <SelectedWrapper bgColor={bgColor} onClick={handleClick}>
                <SelectedText textColor={textColor}>{label}</SelectedText>
            </SelectedWrapper>
        )
    } else { 
        return (
            <Wrapper bgColor={bgColor} onClick={handleClick}>
                <Text textColor={textColor}>{label}</Text>
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px 15px 0 0;
    width: 60px;
    height: 30px;
    background-color: ${({ bgColor, theme }) => theme.colors[bgColor]};
    margin: 0 2px;
    cursor: pointer;
`

const SelectedWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px 15px 0 0;
    width: 60px;
    height: 40px;
    background-color: ${({ bgColor, theme }) => theme.colors[bgColor]};
    margin: 0 2px;
    cursor: pointer;
`

const Text = styled.span`
    font-size: 16px;
    color: ${({textColor}) => textColor};
`

const SelectedText = styled.span`
    font-size: 20px;
    color: ${({textColor}) => textColor};
`