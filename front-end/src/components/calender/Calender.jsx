import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import tagComponent from "../../components/tag/ScheduleTagItem";

const localizer = momentLocalizer(moment);

const CustomMonthDateHeader = ({ label }) => {
    // label에서 연도와 월을 추출
    const [month, year] = label.split(" ");

    // 월이 한 자리 수이면 앞의 0을 제거
    const parsedMonth = month.startsWith("0") ? month.slice(1) : month;

    return <div style={{ textAlign: "left", fontSize: "0.8vw", margin: "5px" }}>{`${parsedMonth}`}</div>;
};

const CustomMonthHeader = ({ label }) => {
    return <div style={{ fontSize: "0.8vw", margin: "5px", opacity: 0.2 }}>{label}</div>;
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

    useEffect(() => {
        console.log(props.tags);
    }, []);

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
        />
    );
};

export default Calender;

const StyledCalendar = styled(Calendar)`
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
    }

    .rbc-row-content .rbc-row:first-child {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
    }
`;
