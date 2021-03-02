import React from "react";
import styles from "./MonthlyCalendarDay.module.css";

const MonthlyCalendarDay = function ({ day }) {
  return (
    <div className={styles["monthly-calendar-day"]}>
      {day}
    </div>
  );
};

export default MonthlyCalendarDay;
