import styled from "styled-components";

import React, { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";

import GardenHeader from "../../components/gardenHeader/GardenHeader";
import GardenSecond from "./GardenSecond";
import Calender from "../../components/calender/Calender";

import moment from "moment";

import DatePicker from "react-datepicker";

import { FaCirclePlus } from "react-icons/fa6";

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

    const theme = useTheme();
    const [tagColors, setTagColors] = useState([]);
    const [tags, setTags] = useState([]);
    const [selectedTagColorNum, setSelectedTagColorNum] = useState(0);

    const [isDeleteTagModalOn, setIsDeleteTagModalOn] = useState(false);
    const [selectedTag, setSelectedTag] = useState({});

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
        axios(`${process.env.REACT_APP_SERVER_URL}/tag/month?year=2024&month=2`)
            .then((res) => {
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

    useEffect(() => {
        if (tagColors.length === 0) {
            const tempTagColors = Object.entries(theme.colors).filter(([key, value]) => key.startsWith("COLOR_"));
            const tagColorValues = tempTagColors.map(([key, value]) => value);
            console.log(tagColorValues);
            setTagColors(tagColorValues);
        }
    }, [tagColors]);

    useEffect(() => {
        getTags();
    }, [tags]);

    return (
        <div>
            <DeleteTagModal
                isDeleteTagModalOn={isDeleteTagModalOn}
                deleteTagModalHandler={deleteTagModalHandler}
                deleteTagHandler={deleteTagHandler}
                updateCalender={getTags}
            />
            <Wrapper className="Wrapper">
                <GardenHeader category={category} />
                <Content className="Content">
                    <CalenderTitleContainer className="CalenderTitleWrapper">
                        <CalenderTitleInput placeHolder="캘린더 제목을 입력해주세요!" />
                    </CalenderTitleContainer>
                    <FullContainer className="FullContainer">
                        <LeftContainer className="LeftContainer">
                            <CalenderWrapper>
                                <Calender
                                    setSelectedSlot={setSelectedSlot}
                                    tags={tags}
                                    eventPropGetter={eventPropGetter}
                                    onClickTag={deleteTagModalHandler}
                                    isDeleteTagModalOn={isDeleteTagModalOn}
                                />
                            </CalenderWrapper>
                        </LeftContainer>
                        <RightContainer className="RightContainer">
                            <RightWrapper className="RightWrapper">
                                <TodoListContentWrapper className="TodoListContentWrapper">
                                    <TodoListContentDateWrapper className="TodoListContentDateWrapper">
                                        <DateBox>
                                            {(selectedSlot ? selectedSlot.start : new Date()).getMonth() + 1}
                                            <DateUnit>월</DateUnit>
                                        </DateBox>
                                        <DateBox>
                                            {(selectedSlot ? selectedSlot.start : new Date()).getDate()}
                                            <DateUnit>일</DateUnit>
                                        </DateBox>
                                    </TodoListContentDateWrapper>
                                </TodoListContentWrapper>
                                <FixPlanContentWrapper className="FixPlanContentWrapper">
                                    <FixPlanContentTitleWrapper className="FixPlanContentTitleWrapper">
                                        중요한 일정을 고정해보세요!
                                    </FixPlanContentTitleWrapper>
                                    <FixPlanContentDateWrapper className="FixPlanContentDateWrapper">
                                        <DateBox>
                                            {(selectedSlot ? selectedSlot.start : new Date()).getMonth() + 1}
                                            <DateUnit>월</DateUnit>
                                        </DateBox>
                                        <DateBox>
                                            {(selectedSlot ? selectedSlot.start : new Date()).getDate()}
                                            <DateUnit>일</DateUnit>
                                        </DateBox>
                                    </FixPlanContentDateWrapper>
                                    <FixPlanContentTagNameInput
                                        placeHolder="태그 이름을 작성해주세요."
                                        onChange={(e) => setTagName(e.currentTarget.value)}
                                    />
                                    <FixPlanContentTimeWrapper className="FixPlanContentTimeWrapper">
                                        <FixPlanContentTimeTextWrapper>
                                            시간을 입력해주세요.
                                        </FixPlanContentTimeTextWrapper>
                                        <FixPlanContentTimeBox className="FixPlanContentTimeBox">
                                            <FixPlanContentTimeData
                                                selected={timeStartDate} // 현재 선택된 날짜
                                                onChange={(date) => setTimeStartDate(date)} // 날짜가 변경되었을 때 실행되는 함수
                                                selectsStart // DatePicker가 시작 날짜를 선택하는 데 사용되는 것임을 나타냅니다.
                                                startDate={timeStartDate} // 범위 선택기에서 사용자가 선택할 수 있는 시작 날짜를 결정
                                                endDate={timeEndDate} // 범위 선택기에서 사용자가 선택할 수 있는 종료 날짜를 결정
                                                showTimeSelect // 사용자가 시간을 선택할 수 있도록 DatePicker에 시간 선택 옵션을 활성화
                                                showTimeSelectOnly // 날짜를 선택하는 대신 시간만을 선택할 수 있게 하는 옵션
                                                timeIntervals={10} // 사용자가 선택할 수 있는 시간 간격을 분 단위로 설정
                                                timeCaption="Start Time" // 시간 선택 부분 옆에 표시되는 레이블
                                                dateFormat="HH:mm" // 사용자에게 날짜와 시간을 어떻게 표시할지를 결정하는 포맷
                                            />
                                            <FixPlanContentTimeDataUnit>~</FixPlanContentTimeDataUnit>
                                            <FixPlanContentTimeData
                                                selected={timeEndDate}
                                                onChange={(date) => setTimeEndDate(date)}
                                                selectsEnd
                                                startDate={timeStartDate}
                                                endDate={timeEndDate}
                                                showTimeSelect
                                                showTimeSelectOnly
                                                timeIntervals={10}
                                                timeCaption="End Time"
                                                dateFormat="HH:mm"
                                            />
                                        </FixPlanContentTimeBox>
                                    </FixPlanContentTimeWrapper>
                                    <FixPlanContentTagColorWrapper>
                                        {tagColors.map((color, idx) => {
                                            return idx === selectedTagColorNum ? (
                                                <FixPlanContentTagColorCircleBtn
                                                    key={idx}
                                                    tagcolor={color}
                                                    onClick={(e) => {
                                                        setSelectedTagColor(e.currentTarget.getAttribute("tagcolor"));
                                                        setSelectedTagColorNum(idx);
                                                    }}
                                                    selected
                                                />
                                            ) : (
                                                <FixPlanContentTagColorCircleBtn
                                                    key={idx}
                                                    tagcolor={color}
                                                    onClick={(e) => {
                                                        setSelectedTagColor(e.currentTarget.getAttribute("tagcolor"));
                                                        setSelectedTagColorNum(idx);
                                                    }}
                                                />
                                            );
                                        })}
                                    </FixPlanContentTagColorWrapper>
                                    <FixPlanContentAddButtonWrapper>
                                        <FixPlanContentAddButton onClick={() => addTagHandler()} />
                                    </FixPlanContentAddButtonWrapper>
                                </FixPlanContentWrapper>
                            </RightWrapper>
                        </RightContainer>
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
    background-color: #ffe7dd;
    @media (max-width: 1280px) {
        height: 800px;
        width: 1120px;
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
        padding-top: 50px;
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
        height: 730px;
    }
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
    background-color: white;
    @media (max-width: 1280px) {
        margin: 12.8px;
    }
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
    @media (max-width: 1280px) {
        margin: 12.8px;
    }
`;

const TodoListContentWrapper = styled.div`
    width: 90%;
    height: 36vw;
    border: 1px solid black;
    background-color: white;
    border-radius: 1vw;
    margin-bottom: 2vw;
    @media (max-width: 1280px) {
        height: 460px;
        border-radius: 12.8px;
        margin-bottom: 25.6px;
    }
`;

const TodoListContentDateWrapper = styled.div`
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

const FixPlanContentWrapper = styled.div`
    width: 90%;
    height: 19vw;
    border: 1px solid black;
    border-radius: 1vw;
    display: flex;
    flex-direction: column;
    background-color: white;
    @media (max-width: 1280px) {
        height: 242px;
        border-radius: 12.8px;
    }
`;

const FixPlanContentTitleWrapper = styled.div`
    width: 100%;
    height: 1vw;
    margin: 1vw;
    font-size: 1vw;
    font-family: Pretendard;
    font-weight: 600;
    letter-spacing: 0;
    @media (max-width: 1280px) {
        height: 12.8px;
        margin: 12.8px;
        font-size: 12.8px;
    }
`;

const FixPlanContentDateWrapper = styled.div`
    width: 5.8vw;
    height: 2vw;
    border: 1px solid black;
    margin-left: 1vw;
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
        height: 25.6px;
        margin-left: 12.8px;
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

const FixPlanContentTagNameInput = styled.input`
    width: 65%;
    height: 2.2vw;
    border: 1px solid black;
    margin: 1vw;
    border-radius: 1vw;
    padding-left: 10px;
    @media (max-width: 1280px) {
        height: 28px;
        margin: 12.8px;
        border-radius: 12.8px;
    }
`;

const FixPlanContentTimeWrapper = styled.div`
    width: 75%;
    height: 2.2vw;
    border: 1px solid black;
    margin-left: 1vw;
    border-radius: 1vw;
    padding-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 1280px) {
        height: 28px;
        margin-left: 12.8px;
        border-radius: 12.8px;
    }
`;

const FixPlanContentTimeBox = styled.div`
    width: 45%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-self: end;
    margin-left: auto;
`;

const FixPlanContentTimeTextWrapper = styled.div`
    width: 55%;
    height: 100%;
    font-size: 1vw;
    font-family: Pretendard;
    font-weight: 600;
    letter-spacing: 0em;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 1280px) {
        font-size: 12.8px;
    }
`;

const FixPlanContentTimeDataUnit = styled.div`
    height: auto;
    font-size: 1vw;
    @media (max-width: 1280px) {
        font-size: 12.8px;
    }
`;

const FixPlanContentTimeDataWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FixPlanContentTimeData = styled(DatePicker)`
    width: 2.5vw;
    height: auto;
    text-align: center;
    font-size: 0.8vw;
    opacity: 0.5;
    border: none;
    @media (max-width: 1280px) {
        width: 32px;
        font-size: 11px;
    }
`;

const FixPlanContentTagColorWrapper = styled.div`
    width: 100%;
    height: 3vw;
    margin-top: 0.3vw;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 1280px) {
        height: 38px;
        margin-top: 4px;
    }
`;

const FixPlanContentTagColorCircleBtn = styled.button`
    width: ${(props) => (props.selected ? "1.7vw" : "1.3vw")};
    height: ${(props) => (props.selected ? "1.7vw" : "1.3vw")};
    border-radius: 50%; // 항상 원형을 유지하기 위해 50%로 설정
    border: 1px solid black;
    background-color: ${(props) => props.tagcolor};
    margin: 0.7vw;
    @media (max-width: 1280px) {
        width: ${(props) => (props.selected ? "20px" : "16px")};
        height: ${(props) => (props.selected ? "20px" : "16px")};
        margin: 9px;
    }
`;

const FixPlanContentAddButtonWrapper = styled.div`
    width: 100%;
    height: 3vw;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 1280px) {
        height: 38px;
    }
`;

const FixPlanContentAddButton = styled(FaCirclePlus)`
    width: auto;
    border-radius: 2vw;
    height: 2vw;
    color: #ffe7dd;
    background-color: #ff824c;
    @media (max-width: 1280px) {
        border-radius: 24px;
        height: 24px;
    }
`;
