import React from "react";
import styles from "./Calendar.module.css";

export default function TimeView ({
  times,
}) {
  return (
    <div className={styles.table}>
      {times.map((hour) => {
        return (
          <div key={hour} className={styles.item}>
            <span className={styles.time}>{hour}:00</span>
          </div>
        );
      })}
    </div>
  );
}
