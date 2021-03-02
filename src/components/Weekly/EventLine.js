import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 80%;
  height: 100%;

  .event-box {
    width: 100%;
    height: 4em;
    border: 1px solid #ABABAB;
    border-top: none;
    border-left: none;

    &:hover {
      background-color: #EEEEEE;
      border-left: 1px solid #ABABAB;
      cursor: pointer;
    }
  }
`;

const TIME = 24;
const times = new Array(TIME).fill(undefined).map((v,idx) => idx);

const EventLine = () => {
  return (
    <Wrapper>
      {times.map(n => {
        return <div key={n} className="event-box"></div>;
      })}
    </Wrapper>
  );
}

export default EventLine;