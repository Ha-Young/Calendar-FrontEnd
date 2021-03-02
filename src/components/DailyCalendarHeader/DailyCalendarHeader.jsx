import React from "react";
import styles from "./DailyCalendarHeader.module.css";

export default function DailyCalendarHeader({ selectedDate }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.timeZone}>
        GMT+09
      </div>
      <div className={styles.date}>
        <div>{selectedDate.weekdayShort}</div>
        <div>{selectedDate.day}</div>
      </div>
    </div>
  );
}
