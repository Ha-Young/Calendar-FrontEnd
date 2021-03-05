import React from "react";
import styles from "./CalendarHeader.module.css";
import { calculateDisplayDates } from "../../utils";

const createCalendarHeader = (displayDates) => {
  const head = displayDates.map((item, index) => {
    return (
      <div key={index} className={styles.calendarItem}>
        <div>{item.weekdayShort}</div>
        <div>{item.day}</div>
      </div>
    );
  });

  return head;
}

export default function CalendarHeader({ selectedDate, isDailyView }) {
  let displayDates = calculateDisplayDates(selectedDate, isDailyView);

  return (
    <div className={styles.wrapper}>
      <div className={styles.timeZone}>
        <span>GMT+09</span>
      </div>
      {createCalendarHeader(displayDates)}
    </div>
  );
}
