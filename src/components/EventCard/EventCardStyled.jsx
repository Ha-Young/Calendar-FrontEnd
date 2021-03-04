import React from "react";
import { useHistory } from "react-router-dom";

const EventCardStyled = ({
  id,
  title,
  description,
  date,
  startTime,
  endTime,
}) => {
  const history = useHistory();
  return (
    <div onClick={() => history.push(`/events/${id}`)}>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{date}</p>
      <p>{startTime}</p>
      <p>{endTime}</p>
    </div>
  );
};

export default EventCardStyled;
