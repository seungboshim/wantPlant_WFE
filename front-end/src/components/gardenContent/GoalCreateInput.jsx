import styled from "styled-components"
import green07Plus from "../../assets/images/green07Plus.svg"

/** 목표 추가 버튼, 클릭시 컴포넌트 변경 */
export default function GoalCreateInput({ onClick }) {
    // TODO : 버튼 누르면 목표 POST
    return (
        <Container>
            <GoalTitleWrapper>
                <PlusWrapper src={green07Plus} width={20} alt="plus" />
                <GoalInput />
                <SubmitButton onClick={onClick}>확인</SubmitButton>
            </GoalTitleWrapper>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    width: auto;
    height: 50%;
    margin-bottom: 10px;
    cursor: pointer;
`

const PlusWrapper = styled.img`
    margin-right: 10px;
`

const GoalTitleWrapper = styled.div`
    display: flex;
    flex-grow: 1;
    align-items: center;
    height: auto;
    border-left: 1px solid black;
    padding: 0px 15px;
    font-size: 18px;
`

const GoalInput = styled.input`
    flex-grow: 1;
    border: none;
    outline: none;
    font-size: 18px;
    border-bottom: 1px solid black;
    padding: 10px;
`

const SubmitButton = styled.div`
    font-size: 16px;
    padding-left: 10px;
`