import React from "react";
import styles from "./Calendar.module.css";

export default function TimeTable({ times, openEvent, eventArea, eventInfo }) {
  // eventProperty가 0보다 크면 div의 style 갯수대로 변경한다.

  return (
    <div className={styles.table}>
      {times.map(hour => {
        return (
           <div key={hour} className={styles.item} onClick={openEvent}>
              {hour}:00 {eventInfo.taskTitle && eventInfo.taskTitle}
            </div>
        );
      })}

    </div>
  );
}
