import React from "react";
import styles from "./CalendarMain.module.css"
import TimeIndicator from "../TimeIndicator";
import CalendarTimeTableContainer from "../../containers/CalendarTimeTableContainer"

export default function CalenderMain() {
  return (
    <>
      <div className={styles.Main}>
        <TimeIndicator />
        <CalendarTimeTableContainer />
      </div>
    </>
  );
}
