import React from "react";
import DayGrid from "../Day/DayGrid";
import styles from "./Week.module.css";

export default function WeekGrid({ value }) {
  return (
    <div className={`${styles.weekCell}`}>
      <h3>{value}</h3>
      <DayGrid />
    </div>
  );
}
