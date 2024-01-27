import styled from "styled-components";
import { useState, useEffect } from "react";
import { gardens, pots, goals } from "../../apis/dummy/gardens";
import { HiDotsVertical } from "react-icons/hi";
import TodoCreateButton from "./TodoCreateButton";
import GoalContainer from "./GoalContainer";
import TodoContainer from "./TodoContainer";

/** 새 화분 생성 컴포넌트 */
export default function TodoView({ potId }) {
    const potColors = ["potPurple", "potGreen", "potRed", "potOrange", "potBlue", "potPink"];
    const potName = pots[potId].potName;
    const potColor = pots[potId].potColor;
    
    return (   
        <Wrapper>
            <Container>
                <TitleWrapper>
                    <PaddingDiv />
                    <GardenTitle color={potColor}>{potName}</GardenTitle>
                    <EditButton />
                </TitleWrapper>
                <ScrollWrapper>
                    <TodoWrapper>
                        <GoalContainer></GoalContainer>
                        <TodoContainer></TodoContainer>
                    </TodoWrapper>
                </ScrollWrapper>
                <AddTodoWrapper>
                    <TodoCreateButton />
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
    margin: 40px 52px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const TitleWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const GardenTitle = styled.span`
    padding: 8px 12px;
    background-color: ${({theme, color}) => theme.colors[color].bg};
    border-radius: 12px;
    font-size: 32px;
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
    border: 1px solid black;
    margin: 30px 0;
    overflow-y: auto;
`

const TodoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;
    height: 100px;
    border: 1px solid black;
    margin: 10px;
`

const AddTodoWrapper = styled.div`
    display: flex;
    width: 100%;
`