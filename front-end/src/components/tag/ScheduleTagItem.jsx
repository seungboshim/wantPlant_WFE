import styled from "styled-components";

/** 일정 태그 : 일정 색상, 이름 받음 */
export default function ScheduleTagItem({ color, label }) {
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
    background-color: ${({theme, color}) => theme.colors[color]};
    // 01, 02, 05, 06번 색상 태그면 검은 글씨
    color: ${({color}) => {
            const isBlackLabel = ["tag01", "tag02", "tag05", "tag06"].includes(color);
            return isBlackLabel ? "black" : "white";
        }
        //color === "tag01" | color === "tag02" | color === "tag05" | color === "tag06" ? "black" : "white"
    };
`