import React from "react";
import Calendar from "../../shared/Calendar";
import DayLine from "./DayLine";
import TimeLine from "./TimeLine";
import WeekHeader from "./Header/WeekHeader";

const Weekly = ({ count, onPage }) => {
  onPage();

  return (
    <Calendar>
      <WeekHeader count={count} />
      <TimeLine />
      <DayLine />
    </Calendar>
  );
};

export default Weekly;
