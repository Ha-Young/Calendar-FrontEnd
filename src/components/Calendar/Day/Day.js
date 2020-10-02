import React from "react";
import Hour from "./Hour/Hour";
import styles from "./Day.module.css";
import { TIME, KOR_DAY_OF_WEEK } from "../../../constants"

export default function Day({ day, dayOfWeek }) {
  return (
    <div className={styles.Day}>
      <h3 className={styles.calendarHeader}>
        {`${day}일 ${KOR_DAY_OF_WEEK[dayOfWeek]}`}
      </h3>
      <div className={styles.calendarBody}>
        {
          TIME.map(time => {
            return <Hour key={time} />;
          })
        }
      </div>
    </div>
  );
}
