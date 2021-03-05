import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  top: ${props => props.startTime * 3.55}em;
  width: 100%;
  height: ${props => props.event * 3.45}em;
  background-color: #fbc531;

  .eventInformation {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export default function Schedule({ event }) {
  const {
    startTime,
    endTime,
    title,
    eventId
  } = event;

  const editStartTime = Number(startTime.slice(0, 2));
  const editEndTime = Number(endTime.slice(0, 2));
  const eventTime = editEndTime - editStartTime;

  const history = useHistory();

  return (
    <Wrapper
      startTime={editStartTime}
      event={eventTime}
    >
      <div
        className={styled.eventInformation}
        onClick={() => history.push(`/event/${eventId}`)}
      >
        {title}
      </div>
    </Wrapper>
  );
}
