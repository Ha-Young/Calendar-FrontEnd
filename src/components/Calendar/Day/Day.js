import React from "react";
import CalendarHeader from "../SharedHeader/CalendarHeader";
import DayGrid from "../Day/DayGrid";
import styles from "./Day.module.css";

export default function Day() {
  return (
    <div className={styles.wrapper}>
      <CalendarHeader />
      <DayGrid />
    </div>
  );
}
