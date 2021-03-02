import React from "react";

import HoursBar from "../HoursBar/HoursBar";
import SchedulesBar from "../../containers/ScheduleBar";
import { getWeekList } from "../../utils/date";
import styles from "./CalendarWeek.module.css";

function CalendarWeek() {
  const weekList = getWeekList();

  return (
    <div className={styles.CalendarWeek}>
      <HoursBar />
      {weekList.map((v) => {
        return (
          <SchedulesBar
            key={v}
            fromDate={v - 3}
          />
        );
      })}
    </div>
  );
}

export default CalendarWeek;
