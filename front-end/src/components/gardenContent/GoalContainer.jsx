import styled from "styled-components";
import TodoContainer from "./TodoContainer";
import TodoCreateButton from "./TodoCreateButton";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

/** 화분 정보 -> 목표 */
export default function GoalContainer({ goalTitle, todoList, onClick }) {
    return (
        <Container>
            <GoalTitleWrapper>
                <GoalTextWrapper>{goalTitle}</GoalTextWrapper>
                <EditButton />
            </GoalTitleWrapper>
            {todoList.length > 0 && todoList.map((todo, idx) => {
                return (
                    <TodoContainer 
                        key={idx}
                        todoTitle={todo.todoTitle}
                        complete={todo.complete}
                    />
                )
            })}
            <TodoCreateButton onClick={onClick} />
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
    display: flex;
    justify-content: space-between;
    height: auto;
    padding: 10px 15px;
    border-left: 1px solid black;
    font-size: 18px;
    font-weight: 500;
`

const GoalTextWrapper = styled.div`

`

const EditButton = styled(HiOutlineDotsHorizontal)`
    height: 16px;
    width: 16px;
    padding: 4px;
    margin-right: 5px;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.25s;

    ${Container}:hover &{
        opacity: 1;
    }
`