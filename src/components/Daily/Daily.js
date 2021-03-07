import React from "react";
import CommonElementView from "../Element/CommonElementView";
import LeftNavigation from "../LeftNavigation/LeftNavigation";
import styles from "./Daily.module.css";

export default function Daily({ currentDay, events, setCurrentDay }) {
  function handleClick(type) {
    if (type === "prev") {
      setCurrentDay(-1);
    } else {
      setCurrentDay(1);
    }
  }

  return (
    <>
      <div className={styles.flex}>
        <span
          role="img"
          aria-label="arrow"
          onClick={handleClick("prev")}
        >
          ⬅️
        </span>
        {currentDay}
        <span
          role="img"
          aria-label="arrow"
          onClick={handleClick("next")}
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
