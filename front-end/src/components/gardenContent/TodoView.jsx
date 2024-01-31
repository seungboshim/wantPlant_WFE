import styled from "styled-components";
import { useState, useEffect } from "react";
import { HiDotsVertical } from "react-icons/hi";
import TodoCreateButton from "./TodoCreateButton";
import GoalContainer from "./GoalContainer";
import TodoContainer from "./TodoContainer";
import { potsFromGarden } from "../../apis/dummy/pots";
import { goalsFromPotId } from "../../apis/dummy/goals";
import GoalCreateButton from "./GoalCreateButton";

/** potId 의 목표, 투두 조회 및 생성 컴포넌트 */
export default function TodoView({ potId, AddTodoModalHandler }) {
    const potColors = ["potPurple", "potGreen", "potRed", "potOrange", "potBlue", "potPink"];
    // TODO : potId에 해당하는 화분, 목표 객체 받아오기
    const currentPot = potsFromGarden.pots.find(pot => pot.potId === potId);
    const currentGoals = goalsFromPotId;
    

    return (   
        <Wrapper>
            <Container>
                <TitleWrapper>
                    <PaddingDiv />
                    <GardenTitle color={currentPot.potColor}>{currentPot.potName}</GardenTitle>
                    <EditButton />
                </TitleWrapper>
                <ScrollWrapper>
                    <TodoWrapper>
                        {currentGoals.map((goals, idx) => {
                            return (
                                <GoalContainer 
                                    key={idx}
                                    goalTitle={goals.goalTitle}
                                    todoList={goals.todoList}
                                />
                            )
                        })}
                        <GoalCreateButton />
                    </TodoWrapper>
                </ScrollWrapper>
                <AddTodoWrapper>
                    <TodoCreateButton AddTodoModalHandler={AddTodoModalHandler}/>
                </AddTodoWrapper>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 100%;
    display: flex;
`

const Container = styled.div`
    margin: 3vw 4vw;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 1280px) {
        margin: 40px 52px;
    }
`

const TitleWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const GardenTitle = styled.span`
    padding: 0.6vw 1vw;
    background-color: ${({theme, color}) => theme.colors[color].bg};
    border-radius: 1vw;
    font-size: 2.4vw;
    font-weight: 500;
    @media (max-width: 1280px) {
        font-size: 32px;
        border-radius: 12px;
        padding: 8px 12px;
    }
`

const PaddingDiv = styled.div`
    height: 24px;
    width: 24px;
`

const EditButton = styled(HiDotsVertical)`
    height: 24px;
    width: 24px;
`

const ScrollWrapper = styled.div`
    width: 100%;
    height: -webkit-fill-available;
    margin: 2.4vw 0;
    overflow-y: auto;
    @media (max-width: 1280px) {
        margin: 30px 0;
    }
`

const TodoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;
    height: auto;
`

const AddTodoWrapper = styled.div`
    display: flex;
    width: 100%;
`