import React from "react";
import TimeTable from "./TimeTable";
import TimeView from "./TimeView";
import styles from "./Calendar.module.css";

export default function Daily({
  times,
  openEvent,
  eventArea,
  eventInfo,
}) {
  return (
    <div className={styles.time_teble_wrapper}>
      <TimeView times={times} />
      <TimeTable
        times={times}
        openEvent={openEvent}
        eventArea={eventArea}
        eventInfo={eventInfo}
      />
    </div>
  );
}
