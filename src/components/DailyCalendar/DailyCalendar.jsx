import React from "react";
import styles from "./DailyCalendar.module.css";
import DailyCalendarHeader from "../DailyCalendarHeader/DailyCalendarHeader";
import DailyCalendarBody from "../DailyCalendarBody/DailyCalendarBody";

export default function DailyCalendar({ selectedDate }) {
  return (
    <div className={styles.calendarWrapper}>
      <DailyCalendarHeader selectedDate={selectedDate} />
      <DailyCalendarBody selectedDate={selectedDate} />
    </div>
  );
}
