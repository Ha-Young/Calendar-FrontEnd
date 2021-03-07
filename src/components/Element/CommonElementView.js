import React from "react";
import randomIndex from "../../utils/randomIndex";
import { HOURS } from "../../constants/CALENDAR_UNIT";
import EventElement from "../Element/EventElement";

export default function CommonElementView({ eventDay, events }) {
  return (
    <div>
      {HOURS.map(hour => (
        <EventElement
          key={randomIndex()}
          hour={hour}
          eventDay={eventDay}
          event={events ? events[hour] : ""}
        />
      ))}
    </div>
  );
}
