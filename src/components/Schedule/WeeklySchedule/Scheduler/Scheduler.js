import React from "react";
import styles from "./Scheduler.module.css";
import Table from "./Table/Table";
import TimeTable from "./TimeTable/TimeTable";

const Scheduler = function ({
  updateDateWithTime,
  date,
  weekArray,
  monthArray,
  timeList,
  events
}) {
  return (
    <div className={styles["scheduler"]}>
      <TimeTable timeList={timeList} />
      <Table
        tableColumn={weekArray}
        year={date.getFullYear()}
        monthArray={monthArray}
        tableRow={timeList}
        updateDateWithTime={updateDateWithTime}
        events={events}
      />
    </div>
  );
};

export default Scheduler;
