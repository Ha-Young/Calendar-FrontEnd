import React from "react";
import { Link } from "react-router-dom";

import { IoLocationSharp, IoTimeSharp } from "react-icons/io5";
import styled from "styled-components";

const EventBox = styled.span`
  width: 100%;
  height: ${props => (props.endTime - props.startTime) * 70}px;
  position: absolute;
  top: ${props => props.startTime * 70}px;
  background: ${props => props.eventColor};
  color: #ffffff;
  overflow: hidden;
`

const EventInfo = styled.ul`
  padding: 10px !important;

  li {
    width: 100%;
    height: 1.3em;
    margin: 0 0 0.3em 0;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .title {
    font-size: 0.8em;
  }
  .location {
    font-size: 0.7em;
  }
  .time {
    font-size: 0.7em;
  }
  .icon {
    width: 1.4em;
    height: 1.4em;
    margin: 0 0.5em 0 0;
    vertical-align: middle;
    color: #ffffff;
  }
`

export default function ScheduleEvent({ event }) {
  return (
    <Link to={{
      pathname: `/events/event-${event.date}-${event.startTime}`,
      state: { event }
    }}>
      <EventBox
        startTime={parseInt(event.startTime)}
        endTime={parseInt(event.endTime)}
        eventColor={event.eventColor}
      >
        <EventInfo>
          <li className="title">{event.title}</li>
          {event.location !== "" && (
            <li className="location">
              <IoLocationSharp className="icon" />
              {event.location}
            </li>
          )}
          <li className="time">
            <IoTimeSharp className="icon"/>
            {event.startTime} - {event.endTime}
          </li>
        </EventInfo>
      </EventBox>
    </Link>
  )
}
