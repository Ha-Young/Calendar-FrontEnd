import React from "react";
import { Link } from "react-router-dom";

export default function WithEvent({ text, className, eventData }) {
  const {date, startAt, endAt} = eventData;

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
