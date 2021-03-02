import React from "react";
import { DAY_LIST } from "../../constants/calendarConstants";
import MonthlyCalendarDayHeader from "../MonthlyCalendarDayHeader/MonthlyCalendarDayHeader";
import styles from "./MonthlyCalendarHeader.module.css";

const MonthlyCalendarHeader = function () {
  return (
    <div className={styles["monthly-calendar-header"]} >
      {
        DAY_LIST.map(day =>
          <MonthlyCalendarDayHeader key={day} day={day} />
        )
      }
    </div >
  );
};

export default MonthlyCalendarHeader;
