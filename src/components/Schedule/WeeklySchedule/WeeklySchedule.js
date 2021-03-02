import React from "react";
import Header from "./Header/Header";
import styles from "./WeeklySchedule.module.css";

const WeeklySchedule = function ({ dateObject }) {

  return (
    <div className={styles["weekly-schedule"]}>
      <Header dateObject={dateObject} />
    </div>
  );
};

export default WeeklySchedule;
