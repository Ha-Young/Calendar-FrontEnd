import React from "react";

import { VIEW_OPTION } from "../../constants/stateTypes";
import DailySchedule from "../DailySchedule";
import WeeklySchedule from "../WeeklySchedule";
import styles from "./Schedule.module.css";


function Schedule({ viewOption }) {
  return (
    <div className={styles.wrapper}>
      {viewOption === VIEW_OPTION.DAILY && <DailySchedule />}
      {viewOption === VIEW_OPTION.WEEKLY && <WeeklySchedule />}
    </div>
  );
}

export default Schedule;
