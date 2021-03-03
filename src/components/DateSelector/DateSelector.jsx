import React from "react";

import styles from "./DateSelector.module.css";

function DateSelector({ date, prevDate, nextDate, prevWeek, nextWeek }) {
  return (
    <span className={styles.dateSelector}>
      <button onClick={prevWeek}>저번주</button>
      <button onClick={prevDate}>어제</button>
      <span>{date}</span>
      <button onClick={nextDate}>내일</button>
      <button onClick={nextWeek}>다음주</button>
    </span>
  );
}

export default DateSelector;
