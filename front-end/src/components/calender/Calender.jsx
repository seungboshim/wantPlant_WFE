import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

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
        props.setSelectedDate(e.start);
    };
    const onClickDateBtn = (e) => {
        props.setSelectedDate(e);
    };

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
    .rbc-month-view .rbc-event-container {
        display: flex;
        flex-direction: column-reverse;
    }
`;
