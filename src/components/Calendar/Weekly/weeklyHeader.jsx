import React from "react";
import styles from "./Weekly.module.css";

export default function CalendarHeader({ value, setValue }) {
  function currentMonthName() {
    return value.format("MMMM");
  }

  function currentYear() {
    return value.format("YYYY");
  }

  function previousMonth() {
    return value.clone().subtract(1, "week");
  }

  function nextMonth() {
    return value.clone().add(1, "week");
  }

  return (
    <div className={styles.header}>
      <button
        className={styles.previous}
        onClick={() => !setValue(previousMonth())}
      >
        {String.fromCharCode(171)}
      </button>
      <div className={styles.current}>
        {currentMonthName()}{currentYear()}
      </div>
      <button
        className={styles.next}
        onClick={() => setValue(nextMonth())}
      >
        {String.fromCharCode(187)}
      </button>
    </div>
  );
}
