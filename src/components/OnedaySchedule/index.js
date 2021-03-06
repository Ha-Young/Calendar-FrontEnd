import React from "react";
import styles from "./OnedaySchedule.module.css";
import { Link } from "react-router-dom";

export default function OnedaySchedule({ 
  title,
  eventInfoList,
}) {

  const matchedEvents = eventInfoList.filter((event) => event.date.substr(5) === title);
  let onedayScheduleCells = Array(24).fill(0);

  matchedEvents.map((matchedEvent) => {
    let startTime = Number(matchedEvent.startTime.substr(0, 2));
    let endTime = Number(matchedEvent.endTime.substr(0, 2));
    let timeGap = endTime - startTime;

    while (timeGap > 0) {
      onedayScheduleCells[startTime] = matchedEvent;
      startTime++;
      timeGap--;
    }
  });

  return (
    <div className={styles.OnedaySchedule}>
      <div className={styles.title}><div className={styles.text}>{title}</div></div>
        {
          onedayScheduleCells.map((matchedEvent, idx) =>
            matchedEvent ?
              <Link className={styles.link} key={idx} to={`events/${matchedEvent.id}`}>
                <div key={idx} className={`${styles.cell} ${styles.eventCell}`}>{matchedEvent.title}</div>
              </Link> :
                <div key={idx} className={styles.cell}>{matchedEvent.title}</div>
          )
        }
    </div>
  );
}
