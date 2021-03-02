import React from "react";
import Calendar from "../../shared/Calendar";
import TimeLine from "./TimeLine";
import EventLine from "./EventLine";

const Daily = () => {
  return (
    <Calendar>
      <TimeLine />
      <EventLine />
    </Calendar>
  );
}

export default Daily;
