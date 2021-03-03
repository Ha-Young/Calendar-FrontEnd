import React from "react";
import styles from "./WeeklyCalendar.module.css";
import WeeklyCalendarTimeLine from "../WeeklyCalendarTimeLine/WeeklyCalendarTimeLine";
import WeeklyCalendarContents from "../WeeklyCalendarContents/WeeklyCalendarContents";

export default function WeeklyCalendar({ selectedWeek, loadEvents, events }) {
  return (
    <div className={styles.calendarWrapper}>
      <WeeklyCalendarTimeLine />
      <WeeklyCalendarContents selectedWeek={selectedWeek} loadEvents={loadEvents} events={events} />
    </div>
  );
}
