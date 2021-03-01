import React from "react";
import styles from "./MonthlyCalendarDayHeader.module.css";

const MonthlyCalendarDayHeader = function ({ day }) {
  return (
    <div className={styles["monthly-calendar-day-header"]}>{day}</div>
  );
};

export default MonthlyCalendarDayHeader;
