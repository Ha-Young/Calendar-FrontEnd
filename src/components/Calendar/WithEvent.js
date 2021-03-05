import React from "react";
import { Link } from "react-router-dom";

export default function WithEvent({ userId, text, className, eventData }) {
  const {date, startAt, endAt} = eventData;
  eventData.userId = userId;
  return (
    <Link to={{
      pathname: `/event/detail/${date}/${startAt + endAt}`,
      state: {...eventData},
    }}>
      <div className={className}>
        {text}
      </div> 
    </Link>
  );
}
