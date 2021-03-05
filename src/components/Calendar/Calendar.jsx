import React from "react";
import styles from "./Calendar.module.css";
import CalendarHeader from "../CalendarHeader/CalendarHeader";
import CalendarBody from "../../containers/CalendarBody";

export default function Calendar({ selectedDate, toggleCalendarView, isDailyView }) {
  return (
    <div className={styles.calendarWrapper}>
      <div>
        <button onClick={() => toggleCalendarView()}>Daily / Weekly Toggle</button>
      </div>
      <CalendarHeader selectedDate={selectedDate} isDailyView={isDailyView} />
      <CalendarBody />
    </div>
  );
}