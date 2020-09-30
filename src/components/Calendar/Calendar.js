import React from "react";
import styles from "./Calendar.module.css";
import Day from "./Day/Day";
import Week from "./Week/Week";
import TimeBar from "./TimeBar/TimeBar";

export default function Calendar({ isViewModeDaily }) {
  console.log(isViewModeDaily);

  return (
    <div className={styles.container}>
      <TimeBar />
      {
        isViewModeDaily ? <Day /> : <Week />
      }
    </div>
  );
}