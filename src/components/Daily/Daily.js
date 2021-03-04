import React, { useEffect } from "react";
import Calendar from "../../shared/Calendar";
import TimeLine from "./TimeLine";
import EventLine from "./EventLine";
import DayHeader from "./DailyHeader/DayHeader";

const Daily = ({ count, onPage }) => {
  useEffect(() => {
    onPage();
  }, []);

  return (
    <Calendar>
      <DayHeader count={count} />
      <TimeLine />
      <EventLine />
    </Calendar>
  );
};

export default Daily;
