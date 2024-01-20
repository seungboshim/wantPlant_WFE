import styled from "styled-components";

/** 정원 헤더 컴포넌트 (라벨, 배경색, 텍스트색 인자로 받음) */
export default function GardenHeaderComponent({ label, bgColor, textColor, selected }) {
    // 선택되었을 때엔 커진 버튼
    if (selected) {
        return (
            <SelectedWrapper bgColor={bgColor}>
                <SelectedText textColor={textColor}>{label}</SelectedText>
            </SelectedWrapper>
        )
    } else { 
        return (
            <Wrapper bgColor={bgColor}>
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