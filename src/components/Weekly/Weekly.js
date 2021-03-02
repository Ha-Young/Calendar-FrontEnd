import React from "react";
import styled from "styled-components";
import Calendar from "../../shared/Calendar";
import DayLine from "./DayLine";
import TimeLine from "./TimeLine";
import WeekHeader from "./WeekHeader";

const Weekly = () => {
  return (
    <Calendar>
      <WeekHeader />
      <TimeLine />
      <DayLine />
    </Calendar>
  );
}

export default Weekly;
