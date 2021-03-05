import React from "react";
import styles from "./Daily.module.css";
import TimeElement from "../Element/TimeElement";

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
        <TimeElement list={events} />
      </div>
    </>
  );
}
