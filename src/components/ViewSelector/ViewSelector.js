import React from "react";
import PropTypes from "prop-types";
import styles from "./ViewSelector.module.css";

export default function ViewSelector ({ changeViewType }) {
  const handleChange = (event) => {
    const { value } = event.target;

    if (value === "daily") {
      changeViewType("daily");
    } else if (value === "weekly") {
      changeViewType("weekly");
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

ViewSelector.propTypes = {
  changeViewType: PropTypes.func.isRequired,
};
