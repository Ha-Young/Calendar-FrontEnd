import React from "react";
import styles from "./Daily.module.css";
import CommonElementView from "../Element/CommonElementView";

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
      <div className={styles.daily_flex}>
        <span
          role="img"
          aria-label="arrow"
          onClick={() => handleClick("prev")}
        >
          ⬅️
        </span>
        {currentDay}
        <span
          role="img"
          aria-label="arrow"
          onClick={() => handleClick("next")}
        >
          ➡️
        </span>
      </div>
      <CommonElementView events={events} eventDay={currentDay} />
    </>
  );
}
