import React from "react";
import styles from "./Calendar.module.css";
import Day from "./Day/Day";
import Week from "./Week/Week";
import TimeBar from "./TimeBar/TimeBar";
import * as dayjs from "dayjs";

export default function Calendar({ viewMode }) {
  const day = dayjs().format("D");
  const dayOfWeek = dayjs().day();

  return (
    <div className={styles.container}>
      <TimeBar />
      {
        viewMode === "DAILY"
        && <Day
          day={day}
          dayOfWeek={dayOfWeek}
        />
      }
      {
        viewMode === "WEEKLY"
        && <Week
          day={day}
          dayOfWeek={dayOfWeek}
        />
      }
    </div>
  );
}