import React from "react";
import styles from "./Calendar.module.css";
import { hours } from "../../utils/date";

const CalendarSideBar = () => {
  return (
    <div className={styles.bar}>
      {hours.map((item) => (
        <div key={item} className={styles.block}>{item}</div>
      ))}
    </div>
  );
};

export default CalendarSideBar;
