import React from "react";
import styles from "./CalendarEventBar.module.scss";

function CalendarEventBar({ eventTitle }) {
  return (
      <div className={styles.CalendarEventBar}>
        <h3>{eventTitle}</h3>
      </div>
  );
}

export default CalendarEventBar;
