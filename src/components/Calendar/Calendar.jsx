import React from "react";
import styles from "./Calendar.module.css";

export default function Calendar1({ day, dayID, onClickDate }) {
  const result = [];

  for (let i = 0; i < 24; i++) {
    result.push(i);
  }

  return (
    <>
      <div className={styles["day-box"]}>
        {day}
      </div>
      {result.map((value) => {
        return (
          <div
            onClick={(e) => onClickDate(e)}
            data-id={dayID}
            key={value}
            className={styles["day-box"]}
          >
          </div>
        );
      })}
    </>
  );
}
