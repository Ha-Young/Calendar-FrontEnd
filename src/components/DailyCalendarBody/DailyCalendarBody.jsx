import React from "react";
import styles from "./DailyCalendarBody.module.css";

const createTimeLineItem = () => {
  const items = [];

  for (let i = 0; i < 24; i++) {
    let prefix;

    if (i < 12) prefix = "오전";
    else prefix = "오후";

    items.push(<div key={i * 2} className={styles.timeLineItem}>{`${prefix} ${i}시`}</div>);
  }

  return items;
}

const createCalendarItem = () => {
  const items = [];

  for (let i = 0; i < 24; i++) {
    items.push(<div key={i} className={styles.calendarItem} data-timeindex={i}></div>);
  }

  return items;
}

export default function DailyCalendarBody({ selectedDate }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.timeLineWrapper}>
        {createTimeLineItem()}
      </div>
      <div className={styles.calendarItemWrapper}>
        {createCalendarItem()}
      </div>
    </div>
  );
}
