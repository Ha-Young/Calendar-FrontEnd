import React from "react";
import randomIndex from "../../utils/randomIndex";
import { HOURS } from "../../constants/CALENDAR_UNIT";
import EventElement from "../Element/EventElement";
import styles from "./Element.module.css";

export default function CommonElementView({ eventDay, events }) {
  return (
    <div className={styles.daily_flex}>
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