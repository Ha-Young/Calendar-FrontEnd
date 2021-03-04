import React from "react";
import Scheduler from "./Scheduler/Scheduler";
import styles from "./DailySchedule.module.css";
import Header from "./Header/Header";

const DailySchedule = function ({
  updateDateWithTime,
  date,
  timeList,
  events
}) {
  return (
    <div className={styles["daily-schedule"]}>
      <Header date={date} />
      <Scheduler
        updateDateWithTime={updateDateWithTime}
        date={date}
        timeList={timeList}
      />
    </div>
  );
};

export default DailySchedule;
