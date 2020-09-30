import React from "react";
import styles from "./styles.module.css";

export default function SelectView ({ changeWeeklyView }) {
  const handleChange = (event) => {
    if (event.target.value === "weekly") {
      changeWeeklyView();
    } else {
      changeWeeklyView();
    }
  };

  return (
    <select
      name="calendarView"
      onChange={handleChange}
      className={styles.SelectView}
    >
      <option value="daily">Daily</option>
      <option value="weekly">Weekly</option>
    </select>
  );
}
