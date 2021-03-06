import React from "react";
import { HOURS } from "../../constants/CALENDAR_UNIT";
import randomIndex from "../../utils/randomIndex";
import EventElement from "../Element/EventElement";
import styles from "./Element.module.css";

export default function CommonElementView({ eventDay, events }) {
  return (
    <div className={styles.daily_container}>
      {HOURS.map((hour) => {
        return (
          <EventElement
            key={randomIndex()}
            hour={hour}
            eventDay={eventDay}
            event={events ? events[hour] : ""}
          />
        );
      })}
    </div>
  );
}