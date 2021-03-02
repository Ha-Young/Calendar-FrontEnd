import React from "react";
import HoursBar from "../HoursBar/HoursBar";
import SchedulesBar from "../SchedulesBar/SchedulesBar";

import styles from "./CalendarDay.module.css";

function CalendarDay() {
  return (
    <div className={styles.CalendarDay}>
      <HoursBar />
      <SchedulesBar />
    </div>
  );
}

export default CalendarDay;
