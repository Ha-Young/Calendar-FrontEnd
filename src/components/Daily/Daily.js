import React from "react";
import Calendar from "../../shared/Calendar";
import TimeLine from "./TimeLine";
import EventLine from "./EventLine";
import DayHeader from "./Header/DayHeader";

const Daily = () => {
  return (
    <Calendar>
      <DayHeader />
      <TimeLine />
      <EventLine />
    </Calendar>
  );
}

export default Daily;
