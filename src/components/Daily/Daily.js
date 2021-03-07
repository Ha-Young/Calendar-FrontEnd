import React from "react";
import styles from "./Daily.module.css";
import CommonElementView from "../Element/CommonElementView";
import LeftNavigation from "../LeftNavigation/LeftNavigation";

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
      <div className={styles.daily_container}>
        <LeftNavigation />
        <CommonElementView events={events} eventDay={currentDay} />
      </div>
    </>
  );
}
