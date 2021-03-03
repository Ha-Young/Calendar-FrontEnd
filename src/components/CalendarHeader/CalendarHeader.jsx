import React from "react";
import styles from "./CalendarHeader.module.css";

const CalendarDate = (selectedDate) => {
  const head = selectedDate.map(item => {
    return (
      <div className={styles.calendarItem}>
        <div>{item.weekdayShort}</div>
        <div>{item.day}</div>
      </div>
    );
  });

  return head;
}

export default function CalendarHeader({ selectedDate, loadEvents, events }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.timeZone}>
        GMT+09
      </div>
      {CalendarDate(selectedDate)}
    </div>
  );
}
