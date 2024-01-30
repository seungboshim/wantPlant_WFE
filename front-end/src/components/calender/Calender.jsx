import React from "react";
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

const Calender = () => (
    <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={events}
        style={{ height: "100%" }}
    />
);

export default Calender;
