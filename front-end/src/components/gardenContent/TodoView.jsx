import styled from "styled-components";
import { useState, useEffect } from "react";
import { gardens, pots, goals } from "../../apis/dummy/gardens";
import { HiDotsVertical } from "react-icons/hi";

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
                    투두추가모달열자이걸로
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
    height: 100%;
    border: 1px solid black;
    margin: 30px 0;
`

const TodoWrapper = styled.div`

`

const GoalContainer = styled.div`
    
`

const TodoContainer = styled.div`
    
`

const AddTodoWrapper = styled.div`
    
`