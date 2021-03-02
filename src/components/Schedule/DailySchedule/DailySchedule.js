import React from "react";
import Scheduler from "./Scheduler/Scheduler";
import styles from "./DailySchedule.module.css";
import Header from "./Header/Header";

const DailySchedule = function ({ date, timeList }) {
  return (
    <div className={styles["daily-schedule"]}>
      <Header date={date} />
      <Scheduler timeList={timeList} />
    </div>
  );
};

export default DailySchedule;
