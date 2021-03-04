import React from "react";
import styled from "styled-components";
import { getDayIso } from "../../utils/convertTime";

const Wrapper = styled.div`
  width: 80%;
  height: 100%;

  .event-box {
    width: 100%;
    height: 4em;
    border: 1px solid #ABABAB;
    border-top: none;

    &:hover {
      background-color: #EEEEEE;
      cursor: pointer;
    }
  }
`;

const TIME = 24;
const times = new Array(TIME).fill(undefined).map((v,idx) => idx);

const EventLine = ({ count, events }) => {
  const currentDay = getDayIso(count);
  console.log(currentDay);

  return (
    <Wrapper>
      {times.map(n => {
        return <div key={n} className="event-box"></div>;
      })}
    </Wrapper>
  );
};

export default EventLine;
