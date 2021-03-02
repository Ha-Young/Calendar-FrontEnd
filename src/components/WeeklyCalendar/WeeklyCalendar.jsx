import React from "react";
import styles from "./WeeklyCalendar.module.css";
import WeeklyCalendarTimeLine from "../WeeklyCalendarTimeLine/WeeklyCalendarTimeLine";
import WeeklyCalendarContents from "../WeeklyCalendarContents/WeeklyCalendarContents";

export default function WeeklyCalendar({ selectedDate, selectedWeek }) {
  return (
    <div className={styles.calendarWrapper}>
      <WeeklyCalendarTimeLine selectedDate={selectedDate} />
      <WeeklyCalendarContents selectedDate={selectedWeek} />
    </div>
  );
}
