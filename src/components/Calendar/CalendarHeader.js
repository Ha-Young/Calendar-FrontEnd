import React from "react";
import styles from "./Calendar.module.css";

const CalendarHeader = ({ nav, children }) => {
  return (
    <div className={styles.navigation}>
      {nav?.map((date) => (
        <div key={date} className={styles.date}>{date}</div>
      ))}
      {children}
    </div>
  );
};

export default CalendarHeader;
