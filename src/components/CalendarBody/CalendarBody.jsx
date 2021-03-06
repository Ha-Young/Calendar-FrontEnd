import React from "react";
import styles from "./CalendarBody.module.css";
import CalendarTimeLine from "../CalendarTimeLine/CalendarTimeLine";
import CalendarContents from "../CalendarContents/CalendarContents";

export default function CalendarBody({ displayDates, events, selectEvent }) {
  return (
    <div className={styles.wrapper}>
      <CalendarTimeLine />
      <CalendarContents displayDates={displayDates} events={events} selectEvent={selectEvent} />
    </div>
  );
}
