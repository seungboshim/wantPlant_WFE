import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useTheme } from "styled-components";
import axios from "axios";
import { Server } from "../../../../apis/setting";
import todoEmpty from "../../../../assets/images/todoEmpty.svg";
import todoFill from "../../../../assets/images/todoFill.svg";
import moment from "moment";
import { dummy } from "./dummy";

export default function MyTodoListContentContainer(props) {
    const navigate = useNavigate();
    const theme = useTheme();

    const [categories, setCategories] = useState([]);
    const [gardens, setGardens] = useState([]);
    const [todos, setTodos] = useState([]);

    const body = {
        memberID: 1,
    };

    const convertCategoryToIndex = (category) => {
        switch (category) {
            case "STUDY":
                return 0;
            case "EXERCISE":
                return 1;
            case "HOBBY":
                return 2;
            default:
                return -1;
        }
    };

    const getCategories = async () => {
        const garden_res = await Server.get(`${process.env.REACT_APP_SERVER_URL}/api/gardens`)
            .then((res) => {
                return res.data;
            })
            .catch((err) => console.log(err));

        // category 별로 garden들 배열로 묶음
        const categorizedData = [];
        garden_res.result.gardens.map((garden) => {
            let categoryIdx = convertCategoryToIndex(garden.gardenCategory);
            if (!categorizedData[categoryIdx]) {
                categorizedData[categoryIdx] = [];
            }

            categorizedData[categoryIdx].push(garden);
        });
        setCategories(categorizedData);
    };

    const getTodos = () => {
        Server.get(`/api/pots/todos/date?date=${moment(props.selectedSlot.start).format("YYYY-MM-DD")}`)
            .then((res) => {
                setTodos(res.data.result.todos);
            })
            .catch((err) => console.log(err));
    };

    const getCategoryKoreanName = (category) => {
        if (category === "STUDY") return "공부";
        if (category === "HOBBY") return "취미";
        if (category === "EXERCISE") return "운동";
    };

    const getGoalsByPotId = async (potId) => {
        return await Server.get(`/goals/todos?potId=${potId}`)
            .then((res) => {
                return res.data;
            })
            .catch((err) => console.log(err));
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

    const onClickTagHandler = (garden) => {
        navigate(`/garden/${garden.gardenId}`);
    };

    useEffect(() => {
        getCategories(categories);
        getTodos();
    }, [props.selectedSlot]);

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
                {categories.map((category, idx) => {
                    return (
                        <div key={idx}>
                            <CategoryTitleWrapper>
                                {getCategoryKoreanName(category[0].gardenCategory)}
                            </CategoryTitleWrapper>

                            {todos ? (
                                category.map((garden) => {
                                    const filtered_todos = todos.filter(
                                        (todo) => todo.category === garden.gardenCategory,
                                    );
                                    return filtered_todos.map((todo, idx1) => {
                                        return (
                                            <PotWrapper key={idx1}>
                                                {todo.complete ? (
                                                    <CompletedCheckIcon isfilled />
                                                ) : (
                                                    <CompletedCheckIcon />
                                                )}
                                                <TodoTitleWrapper>{todo.todoTitle}</TodoTitleWrapper>

                                                <GardenNameTagWrapper
                                                    pottagcolor={getPotTagColor(todo.potTagColor)}
                                                    onClick={() => onClickTagHandler(garden)}
                                                >
                                                    {garden.name}
                                                </GardenNameTagWrapper>
                                            </PotWrapper>
                                        );
                                    });
                                })
                            ) : (
                                <div>none</div>
                            )}
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
    background-color: white;
    border-radius: 1vw 0 1vw 1vw;
    margin-bottom: 2vw;
    display: flex;
    flex-direction: column;
    @media (max-width: 1280px) {
        height: 460px;
        border-radius: 12.8px 0 12.8px 12.8px;
        margin-bottom: 25.6px;
    }
`;

const DateWrapper = styled.div`
    width: 5.8vw;
    height: 2vw;
    box-shadow: 0px 0px 4px 0px gray;
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
    background-color: ${(props) => (props.pottagcolor !== null ? props.pottagcolor[1].bg : "")};
    color: ${(props) => (props.pottagcolor !== null ? props.pottagcolor[1].text : "")};
    cursor: pointer;
    @media (max-width: 1280px) {
        font-size: 11.5px;
        border-radius: 7.5px;
    }
`;
