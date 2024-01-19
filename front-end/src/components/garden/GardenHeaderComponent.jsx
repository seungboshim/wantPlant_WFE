import styled from "styled-components";

/** 정원 헤더 컴포넌트. 라벨, 배경색, 텍스트색 인자로 받음 */
export default function GardenHeaderComponent({ label, bgColor, textColor }) {
    return (
        <Wrapper bgColor={bgColor}>
            <Text textColor={textColor}>{label}</Text>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px 15px 0 0;
    width: 60px;
    height: 30px;
    background-color: ${({ bgColor, theme }) => theme.colors[bgColor]};
    margin: 0 4px;
    cursor: pointer;
`

const Text = styled.span`
    font-size: 16px;
    color: ${({textColor}) => textColor}
`