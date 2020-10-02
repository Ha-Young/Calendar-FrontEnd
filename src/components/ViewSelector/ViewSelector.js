import React from "react";
import styles from "./ViewSelector.module.css";

export default function ViewSelector ({ changeView }) {
  return (
    <select
      name="calendarView"
      onChange={changeView}
      className={styles.ViewSelector}
    >
      <option value="daily">Daily</option>
      <option value="weekly">Weekly</option>
    </select>
  );
}
