import React from "react";
import styles from "./Calendar.module.css";

export default function CalendarHeader({ calendarDate, setCalendarDate, typeOfTime }) {
  function currentMonthName() {
    return calendarDate.format("MMMM");
  }

  function currentYear() {
    return calendarDate.format("YYYY");
  }

  function previousMonth() {
    return calendarDate.clone().subtract(1, typeOfTime);
  }

  function nextMonth() {
    return calendarDate.clone().add(1, typeOfTime);
  }

  return (
    <div className={styles.header}>
      <button
        className={styles.previous}
        onClick={() => setCalendarDate(previousMonth())}
      >
        {String.fromCharCode(171)}
      </button>
      <div className={styles.current}>
        {currentMonthName()}{currentYear()}
      </div>
      <button
        className={styles.next}
        onClick={() => setCalendarDate(nextMonth())}
      >
        {String.fromCharCode(187)}
      </button>
    </div>
  );
}
