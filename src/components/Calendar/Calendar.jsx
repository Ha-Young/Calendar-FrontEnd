import React from "react";
import styles from "./Calendar.module.css";
import CalendarHeader from "../CalendarHeader/CalendarHeader";
import CalendarContents from "../../containers/CalendarContents";

export default function Calendar({ selectedDate, toggleCalendarView, isDailyView }) {
  return (
    <div className={styles.calendarWrapper}>
      <div>
        <button onClick={() => toggleCalendarView()}>Daily / Weekly Toggle</button>
      </div>
      <CalendarHeader selectedDate={selectedDate} isDailyView={isDailyView} />
      <CalendarContents />
    </div>
  );
}
