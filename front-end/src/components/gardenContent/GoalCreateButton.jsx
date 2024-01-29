import styled from "styled-components"

export default function GoalCreateButton() {
    return (
        <Container>
            <GoalTitleWrapper>+ 목표</GoalTitleWrapper>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    width: auto;
    height: 50%;
    margin-bottom: 10px;
`

const GoalTitleWrapper = styled.div`
    height: auto;
    border-left: 1px solid black;
    padding: 10px 15px;
    font-size: 18px;
`