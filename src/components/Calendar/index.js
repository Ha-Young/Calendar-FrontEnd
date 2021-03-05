import React from "react";
import styles from "./Calendar.module.css";
import OnedaySchedule from "../OnedaySchedule";
import { CALENDAR_MODE } from "../../utils/constants";

export default function Calendar ({
  currentDate,
  calendarMode,
}) {
    console.log("calender", calendarMode)
  let week = true;

  return (
    <div className={styles.Calender}>

      { calendarMode === CALENDAR_MODE.WEEKLY ?
        <div className={styles.onedayWrap}>
          <OnedaySchedule />
          <OnedaySchedule />
          <OnedaySchedule />
          <OnedaySchedule />
          <OnedaySchedule />
          <OnedaySchedule />
          <OnedaySchedule />
        </div>
        :
        <div className={styles.onedayWrap}>
          <OnedaySchedule />
        </div>
      }
    </div>
  )
}
