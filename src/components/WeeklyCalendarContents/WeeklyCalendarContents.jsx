import React from "react";
import styles from "./WeeklyCalendarContents.module.css";

const createTimeLineItem = () => {
  const items = [];
  for (let i = 0; i < 24; i++) {
    let prefix;
    if (i < 12) prefix = "오전";
    else prefix = "오후";
    items.push(<div key={i*2} className={styles.timeLineItem}>{`${prefix} ${i}시`}</div>);
  }
  return items;
}

export default function WeeklyCalendarContents({ selectedDate }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.date}>
        <div>{selectedDate.weekdayShort}</div>
        <div>{selectedDate.day}</div>
      </div>
    </div>
  );
}
