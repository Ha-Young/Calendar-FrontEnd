import React from "react";
import styles from "./Calendar.module.css";
import DayTable from "./DayTable";

export default function Calendar ({ eventInfo }) {
  return (
    <>
      <div className={styles.Calender}>
        <header className={styles.headerContainer}></header>
        <div className={styles.tableContainer}>
          <div className={styles.tableIndex}>
          </div>
          <DayTable eventInfo={eventInfo} />
        </div>
      </div>
    </>
  );
}
