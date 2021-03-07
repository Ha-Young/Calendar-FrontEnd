import React from "react";
import randomIndex from "../../utils/randomIndex";
import CalendarColumn from "../Element/CalendarColumn";
import styles from "./Weekly.module.css";

export default function WeekEvents({ weekEvents, week }) {
  return (
    <div className={styles.weekly_container_view}>
      {week.map(day => (
        <CalendarColumn
          key={randomIndex()}
          eventDay={day}
          events={weekEvents[day]}
        />
      ))}
    </div>
  );
}
