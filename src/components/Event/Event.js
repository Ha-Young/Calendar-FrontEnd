import React from "react";
import { useParams } from "react-router-dom";

const Event = function () {
  let { eventId } = useParams();

  console.log(eventId);
  return (
    <div>
      {eventId}
    </div>
  );
};

export default Event;
