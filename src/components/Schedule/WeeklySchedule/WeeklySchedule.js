import React from "react";
import Header from "./Header/Header";
import Scheduler from "./Scheduler/Scheduler";
import styles from "./WeeklySchedule.module.css";

const WeeklySchedule = function ({ date, timeList }) {

  return (
    <div className={styles["weekly-schedule"]}>
      <Header date={date} />
      <Scheduler timeList={timeList} />
    </div>
  );
};

export default WeeklySchedule;
