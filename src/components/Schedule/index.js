import React from "react";

import { VIEW_OPTION } from "../../constants/stateTypes";
import DailySchedule from "../DailySchedule";
import TimeColumn from "../TimeColumn";
import WeeklySchedule from "../WeeklySchedule";
import styles from "./Schedule.module.css";

function Schedule({ viewOption, currentDate }) {
  return (
    <div className={styles.wrapper}>
      <TimeColumn />
      {viewOption === VIEW_OPTION.DAILY && <DailySchedule date={currentDate}/>}
      {viewOption === VIEW_OPTION.WEEKLY && <WeeklySchedule currentDate={currentDate}/>}
    </div>
  );
}

export default Schedule;
