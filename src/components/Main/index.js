import React from "react";
import styles from "./Main.module.css"
import TimeIndicator from "../TimeIndicator";
import Calendar from "../Calendar";

export default function Main({
  calendarMode
}) {

  return (
    <>
      <div className={styles.Main}>
        <TimeIndicator />
        <Calendar
          calendarMode={calendarMode}
        />
        </div>
      </>
  )
}