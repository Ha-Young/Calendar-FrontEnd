import React from "react";
import { formatDate, getDaysInWeek, formatWeek } from "../../../utils/utils";
import styles from "./Week.module.css";
import WeekGrid from "./WeekGrid";
import TimeGrid from "../Day/TimeGrid";

export default function WeekRow({ now }) {
  const daysInWeek = getDaysInWeek(now).map((dayObj, index) => {
    return formatDate(dayObj);
  });

  return (
    <div className={`${styles.rowWrapper}`}>
      {daysInWeek.map((value, index) => {
        return <WeekGrid value={value} key={index} />;
      })}
    </div>
  );
}
