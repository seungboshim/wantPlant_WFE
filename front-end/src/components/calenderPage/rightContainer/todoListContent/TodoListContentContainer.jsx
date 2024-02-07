import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useTheme } from "styled-components";
import { garden_res, goal_res_1, goal_res_2 } from "./data";
import axios from "axios";
import todoEmpty from "../../../../assets/images/todoEmpty.svg";
import todoFill from "../../../../assets/images/todoFill.svg";
import moment from "moment";

export default function MyTodoListContentContainer(props) {
    const theme = useTheme();

    const [categories, setCategories] = useState([]);
    const [gardens, setGardens] = useState([]);
    const [todos, setTodos] = useState([]);

    // api Config
    const config = {
        headers: {
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJtZW1iZXJJZCI6MzksImlhdCI6MTcwNzIxNDA4MCwiZXhwIjoxNzA3MzAwNDgwfQ.GtXkVzPzM1UmLdWyOM9bn1D6GCaLEOlv5nKXqdMlsRs",
        },
    };

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

    const getCategories = () => {
        // const garden_res = await axios
        //     .get(`${process.env.REACT_APP_SERVER_URL}/gardens/?memberId=2`, config)
        //     .then((res) => {
        //         console.log(res.data);
        //         return res.data;
        //     })
        //     .catch((err) => console.log(err, "!!!!!!!!!!!!!"));

        const garden_res = {
            isSuccess: true,
            code: "COMMON200",
            message: "성공입니다.",
            result: {
                totalElements: 5,
                gardens: [
                    {
                        // 기존 데이터
                        gardenId: 13,
                        name: "0_garden1",
                        description: "0_garden1",
                        gardenCategory: "STUDY",
                        potList: [
                            {
                                potId: 8,
                                potName: "1_pot1",
                                potType: "GERANIUM",
                                proceed: 0,
                                potTagColor: "PURPLE",
                                potImageUrl: "https://anak-s3.s3.ap-northeast-2.amazonaws.com/pot/geranium-0",
                                startAt: "2024-02-07",
                                garden: {
                                    id: 13,
                                    name: "0_garden1",
                                    description: "0_garden1",
                                    category: "STUDY",
                                    member: {
                                        id: 1,
                                        nickname: "남윤호",
                                        email: "nam2660433@naver.com",
                                        profileImage:
                                            "http://k.kakaocdn.net/dn/bcr2OE/btshj4fgX1L/aTT3EkuFJAIemRrku36ox0/img_640x640.jpg",
                                    },
                                },
                            },
                        ],
                    },
                ],
            },
        };

        // category 별로 garden들 배열로 묶음
        const categorizedData = [];
        console.log(garden_res);
        garden_res.result.gardens.map((garden) => {
            let categoryIdx = convertCategoryToIndex(garden.gardenCategory);
            if (!categorizedData[categoryIdx]) {
                categorizedData[categoryIdx] = [];
            }

            categorizedData[categoryIdx].push(garden);
        });

        console.log(categorizedData);
        setCategories(categorizedData);
    };

    const getTodos = () => {
        let newTodos = [];
        axios
            .get(
                `${process.env.REACT_APP_SERVER_URL}/pots/todos/date?date=${moment(props.selectedSlot.start).format("YYYY-MM-DD")}`,
                config,
            )
            .then((res) => {
                res.data.result.todos.map((todo) => newTodos.push(todo));
            })
            .catch((err) => console.log(err));
        console.log(newTodos);
        setTodos(newTodos);
    };

    const getCategoryKoreanName = (category) => {
        if (category === "STUDY") return "공부";
        if (category === "HOBBY") return "취미";
        if (category === "EXERCISE") return "운동";
    };

    const getGoalsByPotId = async (potId) => {
        return await axios
            .get(`${process.env.REACT_APP_SERVER_URL}/goals/todos?potId=${potId}`, config)
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

    useEffect(() => {
        getCategories();
        getTodos();
    }, []);

    useEffect(() => {
        console.log(todos);
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
                    // console.log(category);
                    return (
                        <div key={idx}>
                            <CategoryTitleWrapper>
                                {getCategoryKoreanName(category[0].gardenCategory)}
                            </CategoryTitleWrapper>
                            {category.map((garden) => {
                                const filtered_todos = todos.filter((todo) => {
                                    return todo.category === garden.gardenCategory;
                                });
                                filtered_todos.map((todo, idx1) => {
                                    console.log(todo);
                                    return (
                                        <PotWrapper key={idx1}>
                                            {todo.complete ? <CompletedCheckIcon isfilled /> : <CompletedCheckIcon />}
                                            <TodoTitleWrapper>{todo.todoTitle}</TodoTitleWrapper>
                                            {/* pottagcolor={getPotTagColor(pot.potTagColor)} */}
                                            <GardenNameTagWrapper>{garden.name}</GardenNameTagWrapper>
                                        </PotWrapper>
                                    );
                                });
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
