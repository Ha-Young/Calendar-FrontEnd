import React from "react";
import styles from "./Calendar.module.css";
import CalendarHeader from "../CalendarHeader/CalendarHeader";
import CalendarTimeLine from "../CalendarTimeLine/CalendarTimeLine";
import CalendarContentsContainer from "../../containers/CalendarContentsContainer";

export default function Calendar({ selectedDate, isDailyView }) {
  return (
    <div className={styles.calendarWrapper}>
      <CalendarHeader selectedDate={selectedDate} isDailyView={isDailyView} />
      <div className={styles.bodyWrapper}>
        <CalendarTimeLine />
        <CalendarContentsContainer />
      </div>
    </div>
  );
}
