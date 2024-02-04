import styled from "styled-components";
import TodoContainer from "./TodoContainer";
import TodoCreateButton from "./TodoCreateButton";

/** 화분 정보 -> 목표 */
export default function GoalContainer({ goalTitle, todoList }) {
    return (
        <Container>
            <GoalTitleWrapper>{goalTitle}</GoalTitleWrapper>
            {todoList.length > 0 && todoList.map((todo, idx) => {
                return (
                    <TodoContainer 
                        key={idx}
                        todoTitle={todo.todoTitle}
                        complete={todo.complete}
                    />
                )
            })}
            <TodoCreateButton />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;
    height: 50%;
    margin-bottom: 20px;
`

const GoalTitleWrapper = styled.div`
    height: auto;
    padding: 10px 15px;
    border-left: 1px solid black;
    font-size: 18px;
    font-weight: 500;
`