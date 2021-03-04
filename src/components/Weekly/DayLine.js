import React from "react";
import styled from "styled-components";
import { getWeek } from "../../utils/convertTime";
import EventLine from "./EventLine";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 80%;
  height: 100%;
`;

const DAY = 7;
const days = new Array(DAY).fill(undefined).map((v,idx) => idx);

const DayLine = ({ count }) => {
  console.log(getWeek(count));
  return (
    <Wrapper>
      {days.map(v => {
        return <EventLine key={v}  />;
      })}
    </Wrapper>
  );
};

export default DayLine;
