import React from "react";
import { useParams } from "react-router-dom";

function Event() {
  let { eventId } = useParams();

  console.log(eventId);
  return (
    <div>
      {eventId}
    </div>
  );
}

export default Event;
