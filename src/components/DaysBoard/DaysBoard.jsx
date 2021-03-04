import React from "react";

import { getDayOfTheWeek, getDays } from "../../utils/date";
import styles from "./DaysBoard.module.css";

function DaysBorad({ date, isTheDay = false }) {
  const dayOfTheWeek = getDayOfTheWeek(date);
  const days = getDays(date);

  return (
    <span className={styles.daysBoard}>
      <div>{dayOfTheWeek}</div>
      <div className={isTheDay ? styles.today : styles.days}>{days}</div>
    </span>
  );
}

export default DaysBorad;
