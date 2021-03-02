import React from "react";
import styled from "styled-components";
import Line from "./Line";

const Wrapper = styled.div`
  padding: 1em;
`;

const TIME = 24;
const times = new Array(TIME).fill(undefined).map((v,idx) => idx);

const Timeline = () => {
  return (
    <Wrapper>
      {times.map(n => {
        return <Line key={n} time={n} />;
      })}
    </Wrapper>
  );
}

export default Timeline;
