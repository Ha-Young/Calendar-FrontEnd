import React from "react";
import {
  FaAngleLeft,
  FaAngleRight,
  FaAngleDoubleLeft,
  FaAngleDoubleRight
} from "react-icons/fa"

import styles from "./DateSelector.module.css";

function DateSelector({ date, prevDate, nextDate, prevWeek, nextWeek }) {
  return (
    <span className={styles.dateSelector}>
      <button onClick={prevWeek}>
        <FaAngleDoubleLeft />
      </button>
      <button onClick={prevDate}>
        <FaAngleLeft />
      </button>
      <span>{date}</span>
      <button onClick={nextDate}>
        <FaAngleRight />
      </button>
      <button onClick={nextWeek}>
        <FaAngleDoubleRight />
      </button>
    </span>
  );
}

export default DateSelector;
