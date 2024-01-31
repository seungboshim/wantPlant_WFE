import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const events = [
    {
        start: moment().toDate(),
        end: moment().add(1, "days").toDate(),
        title: "Some title",
    },
];

// Month 헤더를 커스텀하는 컴포넌트
const CustomMonthHeader = ({ label }) => (
    <div style={{ textAlign: "left", fontSize: "1.1vw", margin: "5px" }}>{label}</div>
);

// Drill 날짜를 커스텀하는 컴포넌트
const CustomDateHeader = ({ date }) => <div style={{ backgroundColor: "lightgreen", color: "red" }}>a</div>;

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
        <Calendar
            localizer={localizer}
            defaultDate={new Date()}
            defaultView="month"
            events={events}
            components={{
                toolbar: CustomToolbar, // 커스텀 툴바 사용
                month: {
                    dateHeader: CustomMonthHeader, // Month 헤더 커스텀 컴포넌트 사용
                },
                day: {
                    header: CustomDateHeader, // Drill 날짜 커스텀 컴포넌트 사용
                },
            }}
            onSelectSlot={(e) => onClickSlot(e)}
            onDrillDown={(e) => onClickDateBtn(e)}
            selectable
        />
    );
};

export default Calender;
