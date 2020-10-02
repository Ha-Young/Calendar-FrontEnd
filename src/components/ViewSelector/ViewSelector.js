import React from "react";
import styles from "./ViewSelector.module.css";

export default function ViewSelector ({ changeView }) {
  const handleChange = (event) => {
    if (event.target.value === "weekly") {
      changeView();
    }
  };

  return (
    <select
      name="calendarView"
      onChange={handleChange}
      className={styles.ViewSelector}
    >
      <option value="daily">Daily</option>
      <option value="weekly">Weekly</option>
    </select>
  );
}
