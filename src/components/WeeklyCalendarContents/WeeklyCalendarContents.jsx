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

export default function WeeklyCalendarContents({ selectedWeek }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.calendarItemWrapper}>
        <div className={styles.calendarItem}></div>
        {createCalendarItem()}
      </div>
      <div className={styles.calendarItemWrapper}>
        <div className={styles.calendarItem}></div>
        {createCalendarItem()}
      </div>
      <div className={styles.calendarItemWrapper}>
        <div className={styles.calendarItem}></div>
        {createCalendarItem()}
      </div>
      <div className={styles.calendarItemWrapper}>
        <div className={styles.calendarItem}></div>
        {createCalendarItem()}
      </div>
      <div className={styles.calendarItemWrapper}>
        <div className={styles.calendarItem}></div>
        {createCalendarItem()}
      </div>
      <div className={styles.calendarItemWrapper}>
        <div className={styles.calendarItem}></div>
        {createCalendarItem()}
      </div>
      <div className={styles.calendarItemWrapper}>
        <div className={styles.calendarItem}></div>
        {createCalendarItem()}
      </div>
    </div>
  );
}
