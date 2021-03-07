import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

import CALENDAR from "../../../constants/calendarConstants";
import COLOR from "../../../constants/color";

import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  top: ${props => props.startTime * CALENDAR.SCHEDULE_HEIGHT}em;
  width: 100%;
  height: ${props => props.event * CALENDAR.SCHEDULE_HEIGHT}em;
  background-color: ${COLOR.YELLOW};
  border: 1px solid ${COLOR.BLACK};
  box-sizing: border-box;
  cursor: pointer;

  .eventInformation {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export default function Schedule({ event }) {
  const history = useHistory();

  const {
    startTime,
    endTime,
    title,
    eventId
  } = event;

  const editStartTime = Number(startTime.slice(0, 2));
  const editEndTime = Number(endTime.slice(0, 2));
  const eventTime = editEndTime - editStartTime;

  return (
    <Wrapper
      startTime={editStartTime}
      event={eventTime}
      onClick={() => history.push(`/event/${eventId}`)}
    >
      <div className={styled.eventInformation}>
        {title}
      </div>
    </Wrapper>
  );
}

Schedule.propTypes = {
  event: PropTypes.shape({
    startTime: PropTypes.string.isRequired,
    endTime: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    eventId: PropTypes.string.isRequired,
  }),
};

