import React from "react";
import Header from "./Header/Header";
import Scheduler from "./Scheduler/Scheduler";
import { generateWeekArray } from "../../../utils/calendarUtils";
import styles from "./WeeklySchedule.module.css";

const WeeklySchedule = function ({
  updateDateWithTime,
  date,
  timeList,
  events
}) {
  const weekArray = generateWeekArray(date);

  return (
    <div className={styles["weekly-schedule"]}>
      <Header weekArray={weekArray} />
      <Scheduler
        date={date}
        timeList={timeList}
        weekArray={weekArray}
        updateDateWithTime={updateDateWithTime}
      />
    </div>
  );
};

export default WeeklySchedule;
