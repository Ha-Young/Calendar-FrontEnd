import React from "react";
import styles from "./Weekly.module.css";
import Daily from "../Daily/Daily";

export default function Weekly({ userEvents, dispatch }) {

  return (
    <div className={styles.WeeklyContainer}>
      {userEvents.map((events, index) => (
        <Daily key={index} eventDate={events[0]} userEvents={events[1]} dispatch={dispatch}/>
      ))}
    </div>
  );
}
