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
            }}
            onSelectSlot={(e) => onClickSlot(e)}
            onDrillDown={(e) => onClickDateBtn(e)}
            selectable
        />
    );
};

export default Calender;
