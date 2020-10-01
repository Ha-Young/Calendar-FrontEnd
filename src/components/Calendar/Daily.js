import React from "react";
import TimeTable from "./TimeTable";

export default function Daily({
  times,
  openEvent,
  eventArea,
  eventInfo,
}) {
  return (
    <TimeTable
    times={times}
    openEvent={openEvent}
    eventArea={eventArea}
    eventInfo={eventInfo}
    />
  );
}
