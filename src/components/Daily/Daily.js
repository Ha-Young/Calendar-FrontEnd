import React from "react";
import styles from "./Daily.module.css";
import { HOURS } from "../../constants/DailyTimesArray";
import randomIndex from "../../utils/randomIndex";
import EventElement from "../Element/EventElement";

export default function Daily({ currentDay, events, goForward, goBackward }) {
  function handleClick(type) {
    if (type === "prev") {
      goBackward();
    } else {
      goForward();
    }
  }

  return (
    <>
      <div className={styles.flex}>
        <span role="img" aria-label="arrow" onClick={() => handleClick("prev")}>⬅️</span>
        <div>{currentDay}</div>
        <span role="img" aria-label="arrow" onClick={() => handleClick("next")}>➡️</span>
      </div>
      <div className={styles.daily_container}>
        {HOURS.map((hour) => {
          return (
            <EventElement
            key={randomIndex()}
            hour={hour}
            event={events ? events[hour] : ""}
            />
          )
        })}
      </div>
    </>
  );
}
