import React from "react";
import { Link } from "react-router-dom";

import { IoLocationSharp, IoTimeSharp } from "react-icons/io5";
import styled from "styled-components";

const EventBox = styled.span`
  width: 100%;
  height: ${props => (props.endTime - props.startTime) * 50}px;
  position: absolute;
  top: ${props => props.startTime * 50}px;
  background: #B721FF;
  color: #ffffff;
`

const EventInfo = styled.ul`
  padding: 1em !important;
  li {
    margin: 0 0 0.3em 0;
  }
  .title {
    font-size: 0.9em;
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

export default function Event({ event }) {
  return (
    <Link to="/event/event_id">
      <EventBox startTime={Number(event.startTime)} endTime={Number(event.endTime)}>
        <EventInfo>
          <li className="title">{event.title}</li>
          <li className="location">
            <IoLocationSharp className="icon" />
            {event.location}
          </li>
          <li className="time">
            <IoTimeSharp className="icon"/>
            {event.startTime} - {event.endTime}
          </li>
        </EventInfo>
      </EventBox>
    </Link>
  )
}
