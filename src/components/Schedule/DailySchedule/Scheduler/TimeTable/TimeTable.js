import React from "react";
import TimeCell from "./TimeCell/TimeCell";
import styles from "./TimeTable.module.css";

const TimeTable = function ({ timeList }) {
  return (
    <div className={styles["time-table"]}>
      {timeList.map(time =>
      (
        <TimeCell key={`${time}O'Cloock`} time={time} />
      ))}
    </div>
  );
};

export default TimeTable;
