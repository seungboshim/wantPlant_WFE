import styled from "styled-components";
import todoEmpty from "../../assets/images/todoEmpty.svg";
import todoFill from "../../assets/images/todoFill.svg";

/** 화분 정보 -> 투두 */
export default function TodoContainer({ todoTitle, complete }) {
    // TODO : 누르면 complete 변경되는거 PATCH
    if (complete) {
        return (
            <Container>
                <WateringWrapper src={todoFill} />
                <TodoTitleWrapper>{todoTitle}</TodoTitleWrapper>
            </Container>
        )
    } else return (
        <Container>
            <WateringWrapper src={todoEmpty} />
            <TodoTitleWrapper>{todoTitle}</TodoTitleWrapper>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    width: auto;
    height: 50%;
    margin: 10px 20px;
`

const WateringWrapper = styled.img`
    height: 20px;
    margin-right: 10px;
`

const TodoTitleWrapper = styled.div`
    
`