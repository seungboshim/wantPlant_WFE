import styled from "styled-components"
import green05Plus from "../../assets/images/green05Plus.svg"

export default function TodoCreateButton({ onClick }) {
    return (
        <Container onClick={onClick}>
            <TodoTitleWrapper>
                <PlusWrapper src={green05Plus} width={16} alt="plus" />
                할 일 추가하기
            </TodoTitleWrapper>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    width: auto;
    height: 50%;
    margin: 10px 20px;
`

const PlusWrapper = styled.img`
    margin-right: 10px;
`

const TodoTitleWrapper = styled.div`
    display: flex;
    align-items: center;
    height: auto;
`