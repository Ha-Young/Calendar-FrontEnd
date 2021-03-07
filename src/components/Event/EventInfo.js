import React from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { convertHour } from "../../utils/convertHour";
import convertTime from "../../utils/convertToAmPm";

const Warpper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 30em;
  padding: 0 5em 0;
  padding-top: 8em;
`;

const EventInfo = ({ events, deleteEvent }) => {
  const { day } = useParams();
  const event = events[day];
  const title = event.title;
  const description = event.description;
  const startHour = convertTime(convertHour(event.startHour));
  const endHour = convertTime(convertHour(event.endHour));

  const handleClick = () => {
    deleteEvent(event);
  };

  return (
    <Warpper>
      <div>
        <div>Title: {title}</div>
        <div>Desc: {description}</div>
        <div>Start Time: {startHour}</div>
        <div>End Time: {endHour}</div>
      </div>
      <Link to="/">
        <button onClick={handleClick}>Delete</button>
      </Link>
      <Link
        to={{
          pathname: '/Event/new',
          state: { modifyingEvent: event }
        }}
      >
        <button>Modifiy</button>
      </Link>
    </Warpper>
  );
};

export default EventInfo;

EventInfo.propTypes = {
  events: PropTypes.object.isRequired,
  deleteEvent: PropTypes.func.isRequired,
};
