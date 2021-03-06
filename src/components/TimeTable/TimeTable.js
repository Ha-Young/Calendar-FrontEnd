import React from "react";
import styles from "./TimeTable.module.css";

export default function TimeTable () {
  const TIMECELL_NUMBER = 24;
  const timeCells = [];

  for (let i = 0; i < TIMECELL_NUMBER; i++) {
    const time = i < 12 ? `${i} AM` : `${i % 12} PM`;
    const id = i < 12 ? `${i}-AM` : `${i % 12}-PM`;

    timeCells.push({time, id});
  }

  const timeTable = timeCells.map((item) => {
    return (
    <div key={item.id} className={styles.timeCell}>
      {item.time}
    </div>
    );
  });

  return (
    <div className={styles.timeTable}>
      {timeTable}
    </div>
  );
}
