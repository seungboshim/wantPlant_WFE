import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import tagComponent from "../../components/tag/ScheduleTagItem";
import axios from "axios";

const localizer = momentLocalizer(moment);

// 캘린터 날짜의 header
const CustomMonthDateHeader = ({ label }) => {
    // label에서 연도와 월을 추출
    const [month, year] = label.split(" ");

    // 월이 한 자리 수이면 앞의 0을 제거
    const parsedMonth = month.startsWith("0") ? month.slice(1) : month;

    return <MonthDateHeaderWrapper>{`${parsedMonth}`}</MonthDateHeaderWrapper>;
};

// 요일 헤더
const CustomMonthHeader = ({ label }) => {
    return <MonthHeaderWrapper>{label}</MonthHeaderWrapper>;
};

// 빈 컴포넌트를 툴바로 사용
const CustomToolbar = () => null;

const Calender = (props) => {
    const onClickSlot = (e) => {
        props.setSelectedSlot(e);
    };
    const onClickDateBtn = (e) => {
        props.setSelectedDate(e);
    };

    const onSelectEventHandler = (e) => {
        props.onClickTag(true, e);
    };

    useEffect(() => {
        console.log(props.isDeleteTagModalOn);
    }, [props.isDeleteTagModalOn]);

    return (
        <StyledCalendar
            localizer={localizer}
            defaultDate={new Date()}
            defaultView="month"
            events={props.tags}
            components={{
                toolbar: CustomToolbar, // 커스텀 툴바 사용
                month: {
                    dateHeader: CustomMonthDateHeader, // Month 헤더 커스텀 컴포넌트 사용
                    header: CustomMonthHeader,
                },
                style: tagComponent,
            }}
            onSelectSlot={(e) => onClickSlot(e)}
            onDrillDown={(e) => onClickDateBtn(e)}
            selectable
            eventPropGetter={props.eventPropGetter}
            onSelectEvent={onSelectEventHandler}
            isDeleteTagModalOn={props.isDeleteTagModalOn}
        />
    );
};

export default Calender;

const StyledCalendar = styled(Calendar)`
    .rbc-month-view {
        pointer-events: ${(props) => (props.isDeleteTagModalOn ? "none" : "auto")};
        z-index: ${(props) => (props.isDeleteTagModalOn ? 0 : 1)};
    }
    .rbc-row-content {
        height: 100%;
        display: flex;
        flex-direction: column-reverse;
        justify-content: flex-start; // 모든 자식 요소를 아래로 정렬
    }

    .rbc-event {
        height: auto; /* 이벤트의 높이 조절 */
        width: fit-content; /* 이벤트의 너비 조절 */
        max-width: 6.5vw;
        margin-left: 0.4vw;
        margin-bottom: 0.3vw;
        border-radius: 1vw;
        font-size: 1vw;

        @media (max-width: 1280px) {
            max-width: 84px;
            margin-left: 5.1px;
            margin-bottom: 4px;
            border-radius: 12.8px;
            font-size: 12.8px;
        }
    }

    .rbc-row-content .rbc-row:first-child {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
    }
`;

const MonthDateHeaderWrapper = styled.div`
    text-align: left;
    font-size: 0.8vw;
    margin: 5px;

    @media (max-width: 1280px) {
        font-size: 10.24px; // 0.8vw * 12.8px
    }
`;

const MonthHeaderWrapper = styled.div`
    font-size: 0.8vw;
    margin: 5px;
    opacity: 0.2;
    @media (max-width: 1280px) {
        font-size: 10.24px; // 0.8vw * 12.8px
    }
`;
