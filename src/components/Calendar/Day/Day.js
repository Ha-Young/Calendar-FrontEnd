import React from "react";
import Hour from "./Hour/Hour";
import styles from "./Day.module.css";
import { TIME, KOR_DAY_OF_WEEK } from "../../../constants";
import * as dayjs from "dayjs";

export default function Day({
  date,
  dayOfWeek,
}) {
  const dayToPrint = dayjs(date).format("D");

  return (
    <div className={styles.Day}>
      <h3 className={styles.calendarHeader}>
        {`${dayToPrint}일 ${KOR_DAY_OF_WEEK[dayOfWeek]}`}
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
