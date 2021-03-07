import React from "react";
import CalendarColumn from "../Element/CalendarColumn";
import LeftNavigation from "../LeftNavigation/LeftNavigation";
import styles from "./Daily.module.css";

export default function Daily({ currentDay, events, setCurrentDay }) {
  return (
    <>
      <div className={styles.flex}>
        <div onClick={() => setCurrentDay(-1)}>
          <span>⬅</span>
        </div>
        <div>{currentDay}</div>
        <div onClick={() => setCurrentDay(1)}>
          <span>➡</span>
        </div>
      </div>
      <div className={styles.daily_container}>
        <LeftNavigation />
        <CalendarColumn events={events} eventDay={currentDay} />
      </div>
    </>
  );
}
