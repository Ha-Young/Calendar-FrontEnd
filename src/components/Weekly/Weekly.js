import React from "react";
import styled from "styled-components";
import Calendar from "../../shared/Calendar";
import EventLine from "../Daily/EventLine";
import TimeLine from "./TimeLine";

const Weekly = () => {
  return (
    <Calendar>
      <TimeLine />
      <EventLine />
    </Calendar>
  );
}

export default Weekly;
