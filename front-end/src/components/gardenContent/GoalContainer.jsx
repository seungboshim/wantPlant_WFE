import styled from "styled-components";

export default function GoalContainer() {
    return (
        <Container>
            목표입니다
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    width: auto;
    height: 50%;
    margin: 10px;
    border: 1px solid black;
`