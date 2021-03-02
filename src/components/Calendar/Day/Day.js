import React from "react";
import DayHeader from "./DayHeader";
import DayGrid from "../Day/DayGrid";
import styles from "./Day.module.css";

export default function Day() {
  return (
    <div className={styles.wrapper}>
      <DayHeader />
      <DayGrid />
    </div>
  );
}
