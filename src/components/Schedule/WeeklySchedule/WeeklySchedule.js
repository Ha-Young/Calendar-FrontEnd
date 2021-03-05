import React from "react";
import Header from "./Header/Header";
import Scheduler from "./Scheduler/Scheduler";
import { generateWeekArrayAndMonthArray } from "../../../utils/calendarUtils";
import styles from "./WeeklySchedule.module.css";

const WeeklySchedule = function ({
  updateDateWithTime,
  date,
  timeList,
  events
}) {
  const [weekArray, monthArray] = generateWeekArrayAndMonthArray(date);

  return (
    <div className={styles["weekly-schedule"]}>
      <Header weekArray={weekArray} />
      <Scheduler
        date={date}
        timeList={timeList}
        weekArray={weekArray}
        monthArray={monthArray}
        updateDateWithTime={updateDateWithTime}
        events={events}
      />
    </div>
  );
};

export default WeeklySchedule;