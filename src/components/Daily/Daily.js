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
    <>
      <div className={styles.flex}>
        <span role="img" aria-label="arrow" onClick={() => handleClick("prev")}>⬅️</span>
        <div>{currentDay}</div>
        <span role="img" aria-label="arrow" onClick={() => handleClick("next")}>➡️</span>
      </div>
      <div className={styles.daily_container}>
        {HOURS.map((hour, index) => {
          return (
            <Link to={`/event/${hour}`} key={randomIndex()}>
              <div className={styles.daily_hour}>
                {hour}
              </div>
            </Link>
          );
        })}
        {/* {HOURS.map((hour, index) => {
          return (
            <>
              {events[hour] ? (
                TimeElement(events[hour], hour)
              ) : (
                <Link to={`/event/${hour}`} key={randomIndex()}>
                  <div className={styles.daily_hour}>
                    {hour}
                  </div>
                </Link>
              )}
            </>
          );
        })} */}
      </div>
    </>
  );
}

function TimeElement(list, hour) {
  const { eventId, title, description } = list;

  return (
    <Link to={`/event/${hour}/new`} key={eventId}>
      <div className={styles.daily_hour}>
        {hour}
      </div>
      <div className={styles.daily_event}>
        {title}
      </div>
    </Link>
  );
}
