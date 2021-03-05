import React from "react";
import styles from "./Calender.module.css";
import OnedaySchedule from "../OnedaySchedule";

export default function Calender () {
    let week = true;

  return (
    <div className={styles.Calender}>

      { week ?
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
