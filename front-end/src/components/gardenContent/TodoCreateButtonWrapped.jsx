import styled from "styled-components";
import green05Plus from "../../assets/images/green05Plus.svg"

export default function TodoCreateButtonWrapped({AddTodoModalHandler}) {
    return (
        <Container onClick={() => AddTodoModalHandler(true)}>
            <img src={green05Plus} width={20} alt="정원추가 아이콘" />
            <TodoCreateText>할 일 추가하기</TodoCreateText>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 64px;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    border-radius: 20px;
    box-shadow: 0px 0px 6px 0px ${({theme}) => theme.colors.strokeGray};
`

const TodoCreateText = styled.span`
    font-size: 20px;
    color: ${({theme}) => theme.colors.strokeGray};
    margin-left: 12px;
`