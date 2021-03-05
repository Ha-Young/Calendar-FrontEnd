import React from "react";
import styles from "./TimeTableBox.module.css";

export default function TimeDisplayBox() {
  const time = [];
  for (let i = 0; i <= 24; i++) {
    if (i <= 12) {
      time.push(`${i} AM`);
    } else {
      time.push(`${i - 12} PM`);
    }
  }

  return (
    <div className={styles.TimeDisplayBox}>
      {time.map((val, i) => {
        return (
          <div 
            className={styles.TimeDisplay} 
            key={i}
          >
            <span>{val}</span>
          </div>
        );
      })}
    </div>
  );
}
