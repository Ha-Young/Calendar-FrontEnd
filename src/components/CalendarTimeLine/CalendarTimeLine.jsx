import React from "react";
import styles from "./CalendarTimeLine.module.css";

export default function CalendarTimeLine() {
  const timeLineItems = [];

  for (let i = 0; i < 24; i++) {
    const prefix = i < 12 ? "오전" : "오후";

    timeLineItems.push(
      <div key={i * 2} className={styles.timeLineItem}>
        <span className={styles.time}>{`${prefix} ${i}시`}</span>
      </div>
    );
  }

  return (
    <div className={styles.timeLineWrapper}>
      {timeLineItems}
    </div>
  );
}
