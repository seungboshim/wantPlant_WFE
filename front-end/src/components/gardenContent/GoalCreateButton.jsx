import styled from "styled-components"
import green05Plus from "../../assets/images/green05Plus.svg"

export default function GoalCreateButton({ onClick }) {
    return (
        <Container onClick={onClick}>
            <GoalTitleWrapper>
                <PlusWrapper src={green05Plus} width={20} alt="plus" />
                목표 추가하기
            </GoalTitleWrapper>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    width: auto;
    height: 50%;
    margin-bottom: 10px;
`

const PlusWrapper = styled.img`
    margin-right: 10px;
`

const GoalTitleWrapper = styled.div`
    display: flex;
    align-items: center;
    height: auto;
    border-left: 1px solid black;
    padding: 10px 15px;
    font-size: 18px;
`