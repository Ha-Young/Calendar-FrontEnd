import React from "react";
import styles from "./ViewSelector.module.css";

export default function ViewSelector ({ changeWeeklyView }) {
  return (
    <select
      name="calendarView"
      onChange={changeWeeklyView}
      className={styles.ViewSelector}
    >
      <option value="daily">Daily</option>
      <option value="weekly">Weekly</option>
    </select>
  );
}
