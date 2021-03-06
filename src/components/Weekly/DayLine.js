import React from "react";
import styled from "styled-components";
import { DAY_COLORS } from "../../assets/colors";
import { getWeek } from "../../utils/convertTime";
import EventLine from "./EventLine";
import { days } from "../../utils/makeSpace";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 100%;
`;

const DayLine = ({ count, events }) => {
  const currentWeek = getWeek(count);

  return (
    <Wrapper>
      {days.map(n => {
        return <EventLine
          key={n}
          day={currentWeek[n]}
          events={events}
          color={DAY_COLORS[n]}
        />;
      })}
    </Wrapper>
  );
};

export default DayLine;
