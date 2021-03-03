import React from "react";
import styles from "./TimeTableBox.module.css";
import TimeDisplayBox from "./TimeDisplayBox";
import TimeTableColumnBox from "./TimeTableColumnBox";

export default function TimeTableBox({ isWeek }) {
  return (
    <div className={styles.TimeTableBox}>
      <TimeDisplayBox />
      <TimeTableColumnBox 
        isWeek={isWeek}
      />
    </div>
  );
}