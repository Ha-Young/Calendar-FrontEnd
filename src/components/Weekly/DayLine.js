import React from "react";
import styled from "styled-components";
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

const DayLine = () => {
  return (
    <Wrapper>
      {days.map(() => {
        return <EventLine />;
      })}
    </Wrapper>
  );
}

export default DayLine;
