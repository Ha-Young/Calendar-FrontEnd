import React from "react";
import MonthlyCalendarHeader from "../MonthlyCalendarHeader/MonthlyCalendarHeader";
import MonthlyCalendarPresentation from "../MonthlyCalendarPresentation/MonthlyCalendarPresentation";
import styles from "./MonthlyCalendar.module.css";

//나중에 redux로 덮어야됨
const MonthlyCalendar = function () {
  return (
    <div className={styles["monthly-calendar"]}>
      <MonthlyCalendarHeader />
      <MonthlyCalendarPresentation year={new Date().getFullYear()} month={new Date().getMonth()} />
    </div>
  );
};

export default MonthlyCalendar;
