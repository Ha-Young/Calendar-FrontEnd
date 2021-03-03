import React from "react";

import { getDayOfTheWeek, getDays } from "../../utils/date";
import styles from "./TheDate.module.css";

function TheDate({ date, today = false }) {
  const dayOfTheWeek = getDayOfTheWeek(date);
  const days = getDays(date);

  return (
    <span className={styles.theDate}>
      <div>{dayOfTheWeek}</div>
      <div className={today ? styles.today : styles.days}>{days}</div>
    </span>
  );
}

export default TheDate;
