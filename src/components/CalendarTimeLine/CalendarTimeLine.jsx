import React from "react";
import styles from "./CalendarTimeLine.module.css";

export default function CalendarTimeLine() {
  const timeLineItems = [];

  for (let i = 0; i < 24; i++) {
    let prefix;

    if (i < 12) prefix = "오전";
    else prefix = "오후";
    // TODO should change key to unique value
    timeLineItems.push(<div key={i * 2} className={styles.timeLineItem}>{`${prefix} ${i}시`}</div>);
  }

  return (
    <div className={styles.timeLineWrapper}>
      {timeLineItems}
    </div>
  );
}
