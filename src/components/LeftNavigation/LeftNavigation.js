import React from "react";
import randomIndex from "../../utils/randomIndex";
import { HOURS } from "../../constants/CALENDAR_UNIT";
import styles from "./LeftNavigation.module.css";

export default function LeftNavigation() {
  return (
    <div className={styles.left_nav}>
      {HOURS.map(hour => (
        <div key={randomIndex()}>{hour}</div>
      ))}
    </div>
  );
}
