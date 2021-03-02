import React from "react";

import HoursBar from "../HoursBar/HoursBar";
import SchedulesBar from "../../containers/ScheduleBar";
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
