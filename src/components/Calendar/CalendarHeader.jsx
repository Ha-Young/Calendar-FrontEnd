import React from "react";
import styles from "./Calendar.module.css";

import CALENDAR from "../../constants/calendarConstants";

export default function CalendarHeader({ calendarDate, onButtonClick, typeOfTime }) {
  function currentMonthName() {
    return calendarDate.format("MMMM");
  }

  function currentYear() {
    return calendarDate.format("YYYY");
  }

  function previousTime() {
    return calendarDate.clone().subtract(1, typeOfTime);
  }

  function nextTime() {
    return calendarDate.clone().add(1, typeOfTime);
  }

  return (
    <div className={styles.header}>
      <button
        className={styles.previous}
        onClick={() => onButtonClick(previousTime())}
      >
        {String.fromCharCode(CALENDAR.PREV_BUTTON)}
      </button>
      <div className={styles.current}>
        {currentMonthName()}{currentYear()}
      </div>
      <button
        className={styles.next}
        onClick={() => onButtonClick(nextTime())}
      >
        {String.fromCharCode(CALENDAR.NEXT_BUTTON)}
      </button>
    </div>
  );
}
