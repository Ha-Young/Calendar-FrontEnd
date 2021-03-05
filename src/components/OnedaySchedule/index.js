import React from "react";
import styles from "./OnedaySchedule.module.css";
import { Link } from "react-router-dom";

export default function OnedaySchedule({ 
  title,
  eventInfoList,
}) {

  const matchedEvents = eventInfoList.filter(
    (event) => event.date.substr(5) === title
  );
  let onedayScheduleCells = Array(24).fill(0);

  matchedEvents.map((event) => {
    let startTime = Number(event.startTime.substr(0, 2));
    let endTime = Number(event.endTime.substr(0, 2));
    let scheduledDuration = startTime + (endTime - startTime);

    while (startTime < scheduledDuration) {
      onedayScheduleCells[startTime] = { title: event.title, id: event.id, date: event.date }
      startTime++;
    }
  });

  return (
    <div className={styles.OnedaySchedule}>
      <div className={styles.title}><div className={styles.text}>{title}</div></div>
        {
          onedayScheduleCells.map((event, idx) =>
            event ?
              <Link className={styles.link} key={idx} to={`events/${event.id}`}>
                <div key={idx} className={`${styles.cell} ${styles.eventCell}`}>{event.title}</div>
              </Link> :
                <div key={idx} className={styles.cell}>{event.title}</div>
          )
        }
    </div>
  );
}
