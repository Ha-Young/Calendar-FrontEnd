import React from "react";
import { Link } from "react-router-dom";
import randomIndex from "../../utils/randomIndex";
import styles from "./Daily.module.css";


export default function Daily({ currentDay, events, goForward, goBackward }) {
  console.log(events)
  const HOURS = [8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];

  function handleClick(type) {
    if (type === "prev") {
      goBackward();
    } else {
      goForward();
    }
  }

  return (
    <div className={styles.daily_container}>
      <div className={styles.flex}>
        <button onClick={() => handleClick("prev")}>⬅️</button>
        <h3>{currentDay}</h3>
        <button onClick={() => handleClick("next")}>➡️</button>
      </div>
      {HOURS.map((hour, index) => {
        return (
          <Link to={`/event/${hour}`} key={randomIndex()}>
            <div className={styles.daily_time}>
              <div>{hour}</div>
              {events[hour] && (
                <div className={styles.event_color}>
                  <div>{events[hour].title}</div>
                  <div>{events[hour].description}</div>
                </div>
              )}
            </div>
          </Link>
        );
      })}
    </div>
  );
}
