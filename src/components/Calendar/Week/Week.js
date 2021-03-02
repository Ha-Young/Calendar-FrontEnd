import React from "react";
import WeekHeader from "../Week/WeekHeader";
import styles from "./Week.module.css";

export default function Week() {
  return (
    <div className={styles.wrapper}>
      <WeekHeader />
    </div>
  );
}
