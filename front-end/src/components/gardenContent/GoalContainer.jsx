import styled from "styled-components";

/** 화분 정보 -> 목표 */
export default function GoalContainer({ goalName }) {
    return (
        <Container>
            {goalName}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    width: auto;
    height: 50%;
    padding: 10px;
    border-left: 1px solid black;
`