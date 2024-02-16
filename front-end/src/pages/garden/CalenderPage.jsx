import styled from "styled-components";
import { useTheme } from "styled-components";

import React, { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";

import GardenHeader from "../../components/gardenHeader/GardenHeader";
import GardenSecond from "./GardenSecond";
import LeftContainer from "../../components/calenderPage/leftContainer/LeftContainer";
import RightContainer from "../../components/calenderPage/rightContainer/RightContainer";

import moment from "moment";

import axios from "axios";

import DeleteTagModal from "../../components/modal/DeleteTagModal";

export default function CalenderPage() {
    const location = useLocation();
    // location = "/garden/{카테고리}"
    const pathname = location.pathname.split("/");
    // pathname = ["", "garden", "{카테고리}"] 저장됨
    const category = pathname[2] ? pathname[2].toUpperCase() : "";

    // 태그 추가 옵션들
    const [selectedSlot, setSelectedSlot] = useState({ start: new Date() });
    const [tagName, setTagName] = useState("");
    const [timeStartDate, setTimeStartDate] = useState(new Date(0));
    const [timeEndDate, setTimeEndDate] = useState(new Date(0));
    const [selectedTagColor, setSelectedTagColor] = useState("");

    // 태그 색상
    const theme = useTheme();
    const [tagColors, setTagColors] = useState([]);
    const [tags, setTags] = useState([]);
    const [selectedTagColorNum, setSelectedTagColorNum] = useState(0);

    // deleteTagModal
    const [isDeleteTagModalOn, setIsDeleteTagModalOn] = useState(false);
    const [selectedTag, setSelectedTag] = useState({});
    const [isUpdateCalender, setIsUpdateCalender] = useState(false);

    // accessToken
    const accessToken = localStorage.getItem("access");

    // api Config
    const config = {
        headers: {
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJtZW1iZXJJZCI6MzgsImlhdCI6MTcwNzEzODU4MywiZXhwIjoxNzA3MjI0OTgzfQ.AREo1RvbzrBtp0n2Nm1xyeViosGlXUF_wt65LwnrdJo", // 'token'은 실제 토큰 값입니다.
            "Access-Control-Allow-Credentials": true,
        },
    };

    // todo
    const [todos, setTodos] = useState([]);

    // gardens
    const [gardens, setGardens] = useState([]);

    // 백에서 gardens 갖고옴
    const getGardens = () => {
        axios(`${process.env.REACT_APP_SERVER_URL}/gardens?page=${1}&pageSize=${1000}`)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => console.log(err));
    };

    // 백에서 todos 갖고옴
    const getTodos = () => {
        axios(`${process.env.REACT_APP_SERVER_URL}/todos`)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => console.log(err));
    };

    const deleteTagModalHandler = (isOpen, e) => {
        setIsDeleteTagModalOn(isOpen);
        document.body.style.overflow = isOpen ? "hidden" : "unset";
        console.log(isOpen, e);
        setSelectedTag(e);
    };

    const deleteTagHandler = () => {
        axios
            .delete(`${process.env.REACT_APP_SERVER_URL}/tag/${selectedTag.id}`)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => console.log(err));
    };

    /* 백에서 태그들 갖고옴 */
    const getTags = () => {
        axios(`${process.env.REACT_APP_SERVER_URL}/tag/month?year=2024&month=2`, config)
            .then((res) => {
                console.log(res);
                const tempTags = res.data.result.tagResponseDtos;

                // 아직 갖고온 tag들에는 start와 end 데이터가 없어서 임시로 넣어줌
                tempTags.map((tag) => {
                    tag.start = tag.date;
                    tag.end = tag.date;
                    tag.title = tag.tagName;
                    tag.selectedTagColor = theme.colors[tag.tagColor];
                });
                setTags(tempTags);
            })
            .catch((err) => console.log(err));
    };

    const addTagHandler = () => {
        const formattedDate = moment(selectedSlot.start).format("YYYY-MM-DD");
        const hours = timeStartDate.getHours().toString().padStart(2, "0");
        const minutes = timeStartDate.getMinutes().toString().padStart(2, "0");
        const formattedTime = `${hours}:${minutes}`;

        /* 특정한 날에 태그 2개 넘게 추가 못하도록 구현 */
        const sameDayEvents = tags.filter((event) => moment(event.start).isSame(selectedSlot.start, "day"));
        if (sameDayEvents.length >= 2) {
            alert("같은 날에 추가할 수 있는 태그의 최대 개수는 2개입니다.");
            return;
        }

        /* 태그 추가 axios */
        const body = {
            tagColor: `COLOR_${selectedTagColorNum}`,
            tagName: tagName,
            tagTime: formattedTime,
            date: formattedDate,
        };

        axios
            .post(`${process.env.REACT_APP_SERVER_URL}/tag/add`, body)
            .then((res) => {
                const newTag = body;
                newTag.id = res.data.result.id;
                newTag.start = newTag.date;
                newTag.end = newTag.date;
                newTag.title = newTag.tagName;
                newTag.selectedTagColor = selectedTagColor;
                console.log("add success", res);
                setTags([...tags, newTag]);
            })
            .catch((err) => console.log(err));
    };

    /* 밑에 코드를 통해서 각 태그들의 색상 입힘 */
    const eventPropGetter = useCallback(
        (event, start, end, isSelected) => ({
            ...{
                style: {
                    backgroundColor: event.selectedTagColor,
                },
            },
        }),
        [],
    );

    // theme 컴포넌트에서 COLOR_로 시작하는 변수들 다 갖고옴
    useEffect(() => {
        if (tagColors.length === 0) {
            const tempTagColors = Object.entries(theme.colors).filter(([key, value]) => key.startsWith("COLOR_"));
            const tagColorValues = tempTagColors.map(([key, value]) => value);
            setTagColors(tagColorValues);
        }
    }, [tagColors, selectedTagColor]);

    // 백에서 tag, todo, garden 갖고옴
    useEffect(() => {
        // axios("http://ec2-3-34-198-148.ap-northeast-2.compute.amazonaws.com:8080/api/token/test")
        //     .then((res) => console.log(res))
        //     .catch((err) => console.log(err));
        getTags();
        // getTodos();
        // getGardens();
        // setIsUpdateCalender(false);
    }, [isUpdateCalender]);

    return (
        <div>
            <DeleteTagModal
                isDeleteTagModalOn={isDeleteTagModalOn}
                deleteTagModalHandler={deleteTagModalHandler}
                deleteTagHandler={deleteTagHandler}
                updateCalender={setIsUpdateCalender}
            />
            <Wrapper className="Wrapper">
                <GardenHeader category="" />
                <Content className="Content">
                    <CalenderTitleContainer className="CalenderTitleWrapper">
                        <CalenderTitleInput placeholder="캘린더 제목을 입력해주세요!" />
                    </CalenderTitleContainer>
                    <FullContainer className="FullContainer">
                        <LeftContainer
                            setSelectedSlot={setSelectedSlot}
                            tags={tags}
                            eventPropGetter={eventPropGetter}
                            onClickTag={deleteTagModalHandler}
                            isDeleteTagModalOn={isDeleteTagModalOn}
                        />
                        <RightContainer
                            selectedSlot={selectedSlot}
                            setTagName={setTagName}
                            timeStartDate={timeStartDate}
                            timeEndDate={timeEndDate}
                            setTimeStartDate={setTimeStartDate}
                            setTimeEndDate={setTimeEndDate}
                            setSelectedTagColor={setSelectedTagColor}
                            setSelectedTagColorNum={setSelectedTagColorNum}
                            addTagHandler={addTagHandler}
                            tagColors={tagColors}
                            selectedTagColorNum={selectedTagColorNum}
                        />
                    </FullContainer>
                </Content>
                <GardenSecond />
            </Wrapper>
        </div>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Content = styled.div`
    height: 68vw;
    width: 88vw;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
    border: 1px solid black;
    border-radius: 2.1vw;
    background-color: #ffe7dd;
    @media (max-width: 1280px) {
        height: 880px;
        width: 1120px;
        border-radius: 20px;
    }
`;

const CalenderTitleContainer = styled.div`
    width: 65%;
    height: 6%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 1280px) {
        height: 50px;
        width: 750px;
    }
`;

const CalenderTitleInput = styled.input`
    width: 16vw;
    height: 2.3vw;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 1vw;
    background-color: white;
    font-size: 1.15vw;
    padding-left: 1vw;
    @media (max-width: 1280px) {
        width: 200px;
        height: 30px;
        border-radius: 15px;
        font-size: 14px;
        padding-left: 12.8px;
    }
`;

const FullContainer = styled.div`
    width: 100%;
    height: 62vw;
    display: flex;
    @media (max-width: 1280px) {
        width: 1120px;
        height: 800px;
    }
`;
