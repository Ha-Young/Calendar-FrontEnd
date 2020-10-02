import React from "react";
import styles from "./TimeTableText.module.scss";

function TimeTableText() {
  const timeArray = Array(24)
    .fill(0)
    .map((hour, index) => {
      return hour + index;
    });

  return (
    <div className={styles.TimeTableText}>
      {timeArray.map((time) => (
        <span key={time}>{time}시</span>
      ))}
    </div>
  );
}

export default TimeTableText;
