import React from "react";
import { TIME } from "../../../constants/time";
import styles from "./ScheduleContainer.module.css";

function ScheduleContainer() {
  return (
    <div className={styles.scheduleContainer}>
      {TIME.map((item) => (
        <div role="button" className={styles.scheduleRow} key={item}></div>
      ))}
    </div>
  );
}

export default ScheduleContainer;
