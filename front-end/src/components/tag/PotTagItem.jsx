import styled from "styled-components";

/** 화분 태그 : 색상과 화분이름 받음 */
export default function PotTagItem({ color, label }) {
    return (
        <Wrapper color={color}>
            {label}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    padding: 3px 10px;
    font-size: 12px;
    width: fit-content;
    height: fit-content;
    background-color: ${({theme, color}) => theme.colors[color].bg};
    color: ${({theme, color}) => theme.colors[color].text};
`