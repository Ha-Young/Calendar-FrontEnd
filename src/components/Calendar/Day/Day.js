import React from "react";
import DayHeader from "./DayHeader";
import DayGrid from "../Day/DayGrid";
import styles from "./Day.module.css";
import TimeGrid from "./TimeGrid";
import WeekRow from "../Week/WeekRow";

export default function Day({ now, onPrevClick, onNextClick }) {
  return (
    <div className={styles.wrapper}>
      <DayHeader
        now={now}
        onPrevClick={onPrevClick}
        onNextClick={onNextClick}
      />
      <WeekRow now={now} />
      <TimeGrid />
    </div>
  );
}
