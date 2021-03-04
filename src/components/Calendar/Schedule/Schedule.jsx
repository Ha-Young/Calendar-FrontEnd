import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  top: ${props => props.startTime * 3.5}em;
  width: 100%;
  height: ${props => props.event * 3.5}em;
  background-color: red;
`;

export default function Schedule({ event }) {
  const {
    startTime,
    endTime,
    title,
    description
  } = event;

  const editStartTime = Number(startTime.slice(0, 2));
  const editEndTime = Number(endTime.slice(0, 2));
  const eventTime = editEndTime - editStartTime;

  return (
    <Wrapper
      startTime={editStartTime}
      event={eventTime}
    >
      {title}<br />
      {description}
    </Wrapper>
  );
}
