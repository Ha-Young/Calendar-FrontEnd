import React from "react";
import styles from "./OnedaySchedule.module.css";
import { Link } from "react-router-dom";

export default function OnedaySchedule({ 
  title,
  currentDate,
  eventInfoList,
}) {

  let onedayScheduleCells = Array(24).fill(0);

  const matchedEvents = eventInfoList.filter(
    (event) => event.date.substr(5) === title
  );

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
      <div className={styles.title}><p className={styles.text}>{title}</p></div>
        {
          onedayScheduleCells.map((event, idx) =>
            event ?
              <Link to={`events/${event.id}`}>
                <div key={idx} className={styles.cell}>{event.title}</div>
              </Link> :
                <div key={idx} className={styles.cell}>{event.title}</div>
          )
        }
    </div>
  );
}
