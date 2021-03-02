import React from "react";
import styles from "./WeeklyCalendar.module.css";
import WeeklyCalendarHeader from "../WeeklyCalendarHeader/WeeklyCalendarHeader";
import WeeklyCalendarBody from "../WeeklyCalendarBody/WeeklyCalendarBody";

export default function WeeklyCalendar({ selectedDate }) {
  return (
    <div className={styles.calendarWrapper}>
      <WeeklyCalendarHeader selectedDate={selectedDate} />
      <WeeklyCalendarBody selectedDate={selectedDate} />
    </div>
  );
}
