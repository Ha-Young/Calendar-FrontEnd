import React from "react";
import styles from "./WeeklyCalendar.module.css";
import WeeklyCalendarContents from "../WeeklyCalendarContents/WeeklyCalendarContents";
import WeeklyCalendarTimeLine from "../WeeklyCalendarTimeLine/WeeklyCalendarTimeLine";

export default function WeeklyCalendar({ selectedDate }) {
  return (
    <div className={styles.calendarWrapper}>
      <WeeklyCalendarTimeLine selectedDate={selectedDate} />
      <WeeklyCalendarContents selectedDate={selectedDate} />
    </div>
  );
}
