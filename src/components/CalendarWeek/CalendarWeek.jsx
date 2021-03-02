import React from "react";

import HoursBar from "../HoursBar/HoursBar";
import SchedulesBar from "../SchedulesBar/SchedulesBar";
import styles from "./CalendarWeek.module.css";

function CalendarWeek() {
  return (
    <div className={styles.CalendarWeek}>
      <HoursBar />
      <SchedulesBar />
    </div>
  );
}

export default CalendarWeek;
