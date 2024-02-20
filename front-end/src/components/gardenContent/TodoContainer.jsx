import styled from "styled-components";
import { useEffect, useState } from "react";
import todoEmpty from "../../assets/images/todoEmpty.svg";
import todoFill from "../../assets/images/todoFill.svg";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { patchTodoComplete } from "../../apis/todo/editTodo";
import { getTodoById } from "../../apis/todo/getTodo";

/** 화분 정보 -> 투두 */
export default function TodoContainer({ todoId, todoTitle, isComplete }) {
    // TODO : 누르면 complete 변경되는거 PATCH
    const [localIsComplete, setLocalIsComplete] = useState(isComplete);

    const handleComplete = () => {
        patchTodoComplete(todoId, true)
            .then((result) => {
                console.log(result);
                getTodoById(todoId).then((result) => {
                    setLocalIsComplete(result.isComplete)

                })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const handleUncomplete = () => {
        patchTodoComplete(todoId, false)
            .then((result) => {
                console.log(result);
                getTodoById(todoId).then((result) => {
                    setLocalIsComplete(result.isComplete)

                })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    useEffect(() => {
        setLocalIsComplete(isComplete)
    },[isComplete])

    if (localIsComplete) {
        return (
            <Container>
                <TodoTitleContainer onClick={handleUncomplete}>
                    <WateringWrapper src={todoFill} />
                    <TodoTextWrapper>{todoTitle}</TodoTextWrapper>
                </TodoTitleContainer>
                <EditButton />
            </Container>
        )
    } else return (
        <Container>
            <TodoTitleContainer onClick={handleComplete}>
                <WateringWrapper src={todoEmpty} />
                <TodoTextWrapper>{todoTitle}</TodoTextWrapper>
            </TodoTitleContainer>
            <EditButton />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    width: auto;
    height: 50%;
    margin: 10px 20px;
    align-items: center;
    justify-content: space-between;
`

const TodoTitleContainer = styled.div`
    display: flex;
    cursor: pointer;
`

const WateringWrapper = styled.img`
    height: 20px;
    margin-right: 10px;
`

const TodoTextWrapper = styled.div`
    
`

const EditButton = styled(HiOutlineDotsHorizontal)`
    height: 16px;
    width: 16px;
    padding: 4px;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.25s;

    ${Container}:hover &{
        opacity: 1;
    }
`