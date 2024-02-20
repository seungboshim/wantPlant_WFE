import styled from "styled-components";
import TodoContainer from "./TodoContainer";
import TodoCreateButton from "./TodoCreateButton";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { useState } from "react";
import { deleteGoal } from "../../apis/goal/editGoal";

/** 화분 정보 -> 목표 */
export default function GoalContainer({ goalId, goalTitle, todoList, AddTodoModalHandler, EditTodoModalHandler }) {
    // console.log(todoList)
    const handleDelete = () => {
        let makeSure = window.confirm(`정말 "${goalTitle}" 목표를 삭제하시겠어요? 투두도 함께 삭제됩니다.`);
        if (makeSure) {
            deleteGoal(goalId).then((result) => {
                console.log(result);
                alert(result);
                
            }).catch((error) => {
                console.log(error)
            })
        }
    }

    return (
        <Container>
            <GoalTitleWrapper>
                <GoalTextWrapper>{goalTitle}</GoalTextWrapper>
                <EditButton onClick={handleDelete}/>
            </GoalTitleWrapper>
            {todoList.length > 0 && todoList.map((todo, idx) => {
                return (
                    <TodoContainer 
                        key={idx}
                        todoId={todo.todoId}
                        todoTitle={todo.todoTitle}
                        isComplete={todo.isComplete}
                        EditTodoModalHandler={EditTodoModalHandler}
                    />
                )
            })}
            <TodoCreateButton AddTodoModalHandler={AddTodoModalHandler} goalId={goalId}/>
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