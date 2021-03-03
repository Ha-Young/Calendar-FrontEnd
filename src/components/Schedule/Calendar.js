import React from "react";
import Header from "./Header";
import Dates from "./Dates";
import ScheduleList from "./ScheduleList";

export default function Calendar({ calendarMode, today, selectedDate, week, goPrev, goNext }) {
  return (
    <>
      <Header selectedDate={selectedDate} goPrev={goPrev} goNext={goNext} />
      <Dates today={today} selectedDate={selectedDate} week={week} calendarMode={calendarMode} />
      <ScheduleList calendarMode={calendarMode} selectedDate={selectedDate} week={week} />
    </>
  )
}
