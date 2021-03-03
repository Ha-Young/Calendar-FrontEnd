import React from "react";
import styles from "./TimeTableBox.module.css";
import Column from "./TimeTableColumn";

export default function TimeTableColumnBox({ isWeek }) {
  if (isWeek) {
    return (
      <div className={styles.TimeTable}>
        <Column />
        <Column />
        <Column />
        <Column />
        <Column />
        <Column />
        <Column />
      </div>
    );
  }

  return (
    <div className={styles.TimeTable}>
      <Column />
    </div>
  );
}