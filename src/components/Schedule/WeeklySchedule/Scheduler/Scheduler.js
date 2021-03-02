import React from "react";
import styles from "./Scheduler.module.css";
import Table from "./Table/Table";
import TimeTable from "./TimeTable/TimeTable";

const Scheduler = function ({ timeList }) {
  return (
    <div className={styles["scheduler"]}>
      <TimeTable timeList={timeList} />
      <Table tableList={timeList} />
    </div>
  );
};

export default Scheduler;
