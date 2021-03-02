import React from "react";
import styles from "./WeeklyCalendarTimeLine.module.css";

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

export default function WeeklyCalendarTimeLine() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.timeLineWrapper}>
        <div className={styles.timeZone}>
          GMT+09
        </div>
        {createTimeLineItem()}
      </div>
    </div>
  );
}
