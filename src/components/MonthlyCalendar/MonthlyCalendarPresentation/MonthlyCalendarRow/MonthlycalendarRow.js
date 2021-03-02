import React from "react";
import MonthlyCalendarDay from "../MonthlyCalendarDay/MonthlyCalendarDay";
import styles from "./MonthlyCalendarRow.module.css";

const MonthlyCalendarRow = function ({ days }) {
  return (
    <div className={styles["monthly-calendar-row"]}>
      {days.map((day, i) =>
        <MonthlyCalendarDay key={`day${i}`} day={day} />
      )}
    </div>
  );
};

export default MonthlyCalendarRow;
