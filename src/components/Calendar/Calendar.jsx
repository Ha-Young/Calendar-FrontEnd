import React from "react";
import styles from "./Calendar.module.css";
import CalendarHeader from "../CalendarHeader/CalendarHeader";
import CalendarBodyContainer from "../../containers/CalendarBodyContainer";

export default function Calendar({ selectedDate, isDailyView }) {
  return (
    <div className={styles.calendarWrapper}>
      <CalendarHeader selectedDate={selectedDate} isDailyView={isDailyView} />
      <CalendarBodyContainer />
    </div>
  );
}
