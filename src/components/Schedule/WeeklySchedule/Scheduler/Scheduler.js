import React from "react";
import styles from "./Scheduler.module.css";
import Table from "./Table/Table";
import TimeTable from "./TimeTable/TimeTable";

const Scheduler = function ({
  updateDateWithTime,
  date,
  weekArray,
  timeList,
  events
}) {
  const tableId = `${date.getFullYear()}-${date.getMonth() + 1}`;

  return (
    <div className={styles["scheduler"]}>
      <TimeTable timeList={timeList} />
      <Table
        tableId={tableId}
        tableColumn={weekArray}
        tableRow={timeList}
        updateDateWithTime={updateDateWithTime}
      />
    </div>
  );
};

export default Scheduler;
