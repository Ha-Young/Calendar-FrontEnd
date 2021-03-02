import React from "react";

import CalendarDay from "../CalendarDay/CalendarDay";
import CalendarWeek from "../CalendarWeek/CalendarWeek";

function Calendar({ isDay }) {
  return (
    <>
      {isDay
        ? <CalendarDay></CalendarDay>
        : <CalendarWeek></CalendarWeek>
      }
    </>
  );
}

export default Calendar;
