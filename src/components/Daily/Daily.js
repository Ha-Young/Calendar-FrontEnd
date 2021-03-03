import React from "react";
import Calendar from "../../shared/Calendar";
import TimeLine from "./TimeLine";
import EventLine from "./EventLine";
import DayHeader from "./Header/DayHeader";

const Daily = ({ count }) => {
  return (
    <Calendar>
      <DayHeader count={count} />
      <TimeLine />
      <EventLine />
    </Calendar>
  );
};

export default Daily;
