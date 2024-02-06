import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useTheme } from "styled-components";
import { garden_res, goal_res_1, goal_res_2 } from "./data";
import axios from "axios";
import todoEmpty from "../../../../assets/images/todoEmpty.svg";
import todoFill from "../../../../assets/images/todoFill.svg";

export default function MyTodoListContentContainer(props) {
    const theme = useTheme();

    const [categories, setCategories] = useState([]);

    const getCategories = () => {
        // axios.get(`${process.env.REACT_APP_SERVER_URL}/gardens`)
        let temp_categories = ["STUDY", "HOBBY", "EXERCISE"];

        let categoryGardens = temp_categories.map((category) =>
            garden_res.result.gardens.filter((garden) => garden.gardenCategory === category),
        );

        // console.log(categoryGardens);
        setCategories(categoryGardens); // 0: study, 1: hobby, 2: exercise
    };

    const getCategoryKoreanName = (category) => {
        if (category === "STUDY") return "공부";
        if (category === "HOBBY") return "취미";
        if (category === "EXERCISE") return "운동";
    };

    const getGoalsByPotId = (potId) => {
        //http://ec2-3-34-198-148.ap-northeast-2.compute.amazonaws.com:8080/api/goals/todos?potId=2

        if (potId === 2) return goal_res_2;
        else return "";
    };

    const getPotTagColor = (tagcolor) => {
        const potTagColors = Object.entries(theme.colors).filter(([key, value]) => key.startsWith("pot"));
        const foundColor = potTagColors.find(
            ([potTagName, { bgColor, textColor }]) => potTagName.substring(3).toLowerCase() === tagcolor.toLowerCase(),
        );
        if (foundColor) {
            return foundColor;
        } else {
            return null;
        }
    };

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <TodoListContentContainer className="TodoListContentWrapper">
            <DateWrapper className="TodoListContentDateWrapper">
                <DateBox>
                    {(props.selectedSlot && props.selectedSlot.start instanceof Date
                        ? props.selectedSlot.start
                        : new Date()
                    ).getMonth() + 1}
                    <DateUnit>월</DateUnit>
                </DateBox>
                <DateBox>
                    {(props.selectedSlot && props.selectedSlot.start instanceof Date
                        ? props.selectedSlot.start
                        : new Date()
                    ).getDate()}
                    <DateUnit>일</DateUnit>
                </DateBox>
            </DateWrapper>

            <ContentWrapper>
                {/* 모든 garden 탐색 */}
                {categories.map((category, idx) => {
                    return (
                        <div key={idx}>
                            <CategoryTitleWrapper>
                                {getCategoryKoreanName(category[0].gardenCategory)}
                            </CategoryTitleWrapper>
                            {category.map((garden, idx1) => {
                                return (
                                    <div key={idx1}>
                                        {garden.potList.map((pot, idx2) => {
                                            return (
                                                <div key={idx2}>
                                                    {getGoalsByPotId(pot.potId) &&
                                                        getGoalsByPotId(pot.potId).result.goalList.map((goal, idx3) => {
                                                            return (
                                                                <div key={idx3}>
                                                                    {goal.todoList.map((todo, idx4) => {
                                                                        return (
                                                                            <PotWrapper key={idx4}>
                                                                                {todo.isComplete ? (
                                                                                    <CompletedCheckIcon isfilled />
                                                                                ) : (
                                                                                    <CompletedCheckIcon />
                                                                                )}
                                                                                <TodoTitleWrapper>
                                                                                    {todo.todoTitle}
                                                                                </TodoTitleWrapper>
                                                                                <GardenNameTagWrapper
                                                                                    pottagcolor={getPotTagColor(
                                                                                        pot.potTagColor,
                                                                                    )}
                                                                                >
                                                                                    {pot.garden.name}
                                                                                </GardenNameTagWrapper>
                                                                            </PotWrapper>
                                                                        );
                                                                    })}
                                                                </div>
                                                            );
                                                        })}
                                                </div>
                                            );
                                        })}
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </ContentWrapper>
        </TodoListContentContainer>
    );
}

const TodoListContentContainer = styled.div`
    width: 90%;
    height: 36vw;
    border: 1px solid black;
    background-color: white;
    border-radius: 1vw;
    margin-bottom: 2vw;
    display: flex;
    flex-direction: column;
    @media (max-width: 1280px) {
        height: 460px;
        border-radius: 12.8px;
        margin-bottom: 25.6px;
    }
`;

const DateWrapper = styled.div`
    width: 5.8vw;
    height: 2vw;
    border: 1px solid black;
    margin: 1vw;
    background-color: ${({ theme }) => theme.colors.pink02};
    border-radius: 0.7vw;
    font-size: 1.4vw;
    font-weight: 600;
    font-family: Pretendard;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 1280px) {
        width: 74px;
        height: 25px;
        margin: 12.8px;
        border-radius: 9px;
        font-size: 18px;
    }
`;

const DateBox = styled.div`
    margin: 2px;
`;

const DateUnit = styled.span`
    display: inline-block;
    font-size: 0.9vw;
    @media (max-width: 1280px) {
        font-size: 11.5px;
    }
`;

const ContentWrapper = styled.div`
    width: 94.5%;
    height: 85%;
    margin-left: 5%;
    overflow: auto;
`;

const CategoryTitleWrapper = styled.div`
    width: fit-content;
    height: auto;
    padding: 0;
    border-bottom: 4px solid #ffe7dd;
    font-size: 1.4vw;
    font-weight: 1000;

    @media (max-width: 1280px) {
        font-size: 18px;
    }
`;

const PotWrapper = styled.div`
    margin: 10px;
    width: 90%;
    height: 2vw;
    display: flex;
    align-items: center;

    @media (max-width: 1280px) {
        height: 25.6px;
    }
`;

const CompletedCheckIcon = styled.div`
    ${(props) => (props.isfilled ? `background-image: url(${todoFill});` : `background-image: url(${todoEmpty});`)}
    background-size: contain;
    background-repeat: no-repeat;
    width: 1.5vw;
    height: 1.5vw;
    @media (max-width: 1280px) {
        width: 19px;
        height: 19px;
    }
`;

const TodoTitleWrapper = styled.div`
    font-size: 1.2vw;
    margin: 4px;
    @media (max-width: 1280px) {
        font-size: 15px;
    }
`;

const GardenNameTagWrapper = styled.div`
    padding: 0 5px;
    font-size: 0.9vw;
    height: auto;
    border-radius: 0.6vw;
    margin: 0 7px;
    margin-top: 3px;
    background-color: ${(props) => props.pottagcolor[1].bg};
    color: ${(props) => props.pottagcolor[1].text};
    @media (max-width: 1280px) {
        font-size: 11.5px;
        border-radius: 7.5px;
    }
`;
