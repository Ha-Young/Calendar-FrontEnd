import React from "react";
import CalendarHeader from "../SharedHeader/CalendarHeader";
import styles from "./Week.module.css";

export default function Week() {
  return (
    <div className={styles.wrapper}>
      <CalendarHeader />
    </div>
  );
}
