import React from "react";
import styles from "./WeeklyCalendarContents.module.css";

const createCalendarItem = () => {
  const items = [];
  for (let i = 0; i < 24; i++) {
    items.push(
      <div key={i*2} className={styles.calendarItem}></div>
    );
  }
  return items;
}

const createCalendar = (week) => {
  const days = week.map((day, index) => {
    return (
    <div key={index} className={styles.calendarItemWrapper}>
      <div className={styles.calendarItem}>
        <div>{day.weekdayShort}</div>
        <div>{day.day}</div>
      </div>
      {createCalendarItem()}
    </div>
    );
    
  })

  return days;
}

export default function WeeklyCalendarContents({ selectedWeek }) {
  return (
    <div className={styles.wrapper}>
      {selectedWeek && createCalendar(selectedWeek)}
    </div>
  );
}
