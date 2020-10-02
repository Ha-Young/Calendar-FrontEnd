import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import styles from "./TimeTable.module.css";

export default function TimeTable ({ date, eventList }) {
  const timeLine = Array(24);

  eventList.forEach((list) => {
    const startTime = Number(list.startTime.substring(0, 2));
    const endTime = Number(list.endTime.substring(0, 2));
    const duration = endTime - startTime;

    for (let i = startTime; i <= startTime + duration; i++) {
      if (list.eventDate === date) {
        timeLine[i] = [list.eventName, list.id];
      }
    }
  });

  return (
    <div className={styles.TimeTable}>
      <div className={styles.date}>
        {moment(date).format("DD")}
      </div>
      {
        [...timeLine].map((list, index) => {
          return (
            list
              ? <Link
                  key={index}
                  to={`/events/${list[1]}`}
                  className={styles.link}
                >
                  <div className={styles.matchedTime}>{list[0]}</div>
                </Link>
              : <div key={index} className={styles.emptyTime} />
          );
        })
      }
    </div>
  );
}
