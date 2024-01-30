import styled from "styled-components";

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import GardenHeader from "../../components/gardenHeader/GardenHeader";
import GardenSecond from "./GardenSecond";
import Calender from "../../components/calender/Calender";

export default function CalenderPage() {
    const location = useLocation();
    // location = "/garden/{카테고리}"
    const pathname = location.pathname.split("/");
    // pathname = ["", "garden", "{카테고리}"] 저장됨
    const category = pathname[2] ? pathname[2].toUpperCase() : "";

    const [selectedDate, setSelectedDate] = useState(Date());

    useEffect(() => {
        console.log(selectedDate);
    }, [selectedDate]);

    return (
        <Wrapper>
            <GardenHeader category={category} />
            <Content className="Content">
                <CalenderTitleContainer className="CalenderTitleWrapper">
                    <CalenderTitleWrapper></CalenderTitleWrapper>
                </CalenderTitleContainer>
                <FullContainer className="FullContainer">
                    <LeftContainer className="LeftContainer">
                        <CalenderWrapper>
                            <Calender setSelectedDate={setSelectedDate} />
                        </CalenderWrapper>
                    </LeftContainer>
                    <RightContainer className="RightContainer">
                        <RightWrapper className="RightWrapper">
                            <TodoListContentWrapper className="TodoListContentBox">
                                <TodoListContentTitleWrapper>
                                    {selectedDate.getMonth() + 1}월 {selectedDate.getDate()}일
                                </TodoListContentTitleWrapper>
                            </TodoListContentWrapper>
                            <FixPlanContentWrapper className="FixPlanContentBox"></FixPlanContentWrapper>
                        </RightWrapper>
                    </RightContainer>
                </FullContainer>
            </Content>
            <GardenSecond />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    @media (max-width: 1280px) {
        height: 800px;
        width: 1120px;
    }
`;

const Content = styled.div`
    height: 68vw;
    width: 88vw;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
    border: 1px solid black;
`;

const CalenderTitleContainer = styled.div`
    width: 65%;
    height: 8%;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CalenderTitleWrapper = styled.div`
    width: 30%;
    height: 50%;
    border: 1px solid black;
`;

const FullContainer = styled.div`
    width: 100%;
    height: 68vw;
    display: flex;
`;

const LeftContainer = styled.div`
    width: 65%;
    height: 100%;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const CalenderWrapper = styled.div`
    width: 93%;
    height: 93%;
    border: 1px solid black;
    margin: 1vw;
`;

const RightContainer = styled.div`
    width: 35%;
    height: 100%;
    border: 1px solid black;
`;

const RightWrapper = styled.div`
    width: 93%;
    height: 93%;
    border: 1px solid black;
    margin: 1vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const TodoListContentWrapper = styled.div`
    width: 90%;
    height: 48%;
    border: 1px solid black;
`;

const TodoListContentTitleWrapper = styled.div`
    width: 30%;
    height: 8%;
    border: 1px solid black;
    margin: 5%;
`;

const FixPlanContentWrapper = styled.div`
    width: 90%;
    height: 48%;
    border: 1px solid black;
`;
