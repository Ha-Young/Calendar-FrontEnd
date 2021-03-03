import React from "react";
import WeekHeader from "../Week/WeekHeader";
import styles from "./Week.module.css";
import WeekRow from "../Week/WeekRow";
import TimeGrid from "../Day/TimeGrid";

export default function Week({ now, onPrevClick, onNextClick }) {
  return (
    <div className={styles.wrapper}>
      <WeekHeader
        now={now}
        onPrevClick={onPrevClick}
        onNextClick={onNextClick}
      />
      <WeekRow now={now} />
      <TimeGrid />
    </div>
  );
}
