import React from "react";
import styles from "./CalendarHeader.module.css";
import { calculateWeek } from "../../reducers";

const CalendarDate = (localDate) => {
  const head = localDate.map(item => {
    return (
      <div className={styles.calendarItem}>
        <div>{item.weekdayShort}</div>
        <div>{item.day}</div>
      </div>
    );
  });

  return head;
}

export default function CalendarHeader({ selectedDate, isDailyView }) {
  let localDate = calculateWeek(selectedDate, isDailyView);

  return (
    <div className={styles.wrapper}>
      <div className={styles.timeZone}>
        GMT+09
      </div>
      {CalendarDate(localDate)}
    </div>
  );
}