import React from "react";

import { getDayOfTheWeek, getDays } from "../../utils/date";
import styles from "./TheDate.module.css";

function TheDate({ date, today = false }) {
  const dayOfTheWeek = getDayOfTheWeek(date);
  const days = getDays(date);

  return (
    <div className={styles.theDate}>
      <div>{dayOfTheWeek}</div>
      <div className={styles.days}>{days}</div>
    </div>
  );
}

export default TheDate;
