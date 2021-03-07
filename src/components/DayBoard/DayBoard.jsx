import React from "react";

import { getDayOfTheWeek, getDay } from "../../utils/date";
import styles from "./DayBoard.module.css";

function DayBorad({ date, isTheDay = false }) {
  const dayOfTheWeek = getDayOfTheWeek(date);
  const day = getDay(date);

  return (
    <span className={styles.dayBoard}>
      <div>{dayOfTheWeek}</div>
      <div className={isTheDay ? styles.today : styles.days}>{day}</div>
    </span>
  );
}

export default DayBorad;
