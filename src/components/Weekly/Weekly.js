import React, { useEffect } from "react";
import Calendar from "../../shared/Calendar";
import DayLine from "./DayLine";
import TimeLine from "./TimeLine";
import WeekHeader from "./Header/WeekHeader";
import styled from "styled-components";

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Weekly = ({ count, onPage, events }) => {
  useEffect(() => {
    onPage();
  }, []);

  return (
    <Calendar>
      <WeekHeader count={count} />
      <FlexBox>
        <TimeLine />
        <DayLine count={count} events={events} />
      </FlexBox>
    </Calendar>
  );
};

export default Weekly;
