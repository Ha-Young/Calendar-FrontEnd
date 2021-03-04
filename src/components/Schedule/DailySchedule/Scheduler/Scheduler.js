import React from "react";
import styles from "./Scheduler.module.css";
import Table from "./Table/Table";
import TimeTable from "./TimeTable/TimeTable";

const Scheduler = function ({
  updateDateWithTime,
  date,
  timeList,
  events
}) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
  const dateNumber = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`;
  const tableId = `${year}-${month}-${dateNumber}`;

  return (
    <div className={styles["scheduler"]}>
      <TimeTable timeList={timeList} />
      <Table
        className="table"
        tableId={tableId}
        tableRow={timeList}
        updateDateWithTime={updateDateWithTime}
        events={events}
      />
    </div>
  );
};

export default Scheduler;
