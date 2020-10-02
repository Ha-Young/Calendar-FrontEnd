import React from "react";
import styles from "./Calendar.module.css";

export default function TimeTable({
  times,
  openEvent,
  eventInfo
}) {
  return (
    <div className={styles.cells}>
      {times.map(hour => {
        return (
           <div key={hour} className={styles.item} onClick={openEvent}>
              {eventInfo.taskTitle &&
              <span className={styles.selected_item}>{eventInfo.taskTitle}</span>
              }
            </div>
        );
      })
      }
    </div>
  );
}
