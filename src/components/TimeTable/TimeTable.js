import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import styles from "./TimeTable.module.css";


export default function TimeTable ({ date, matchedEventList }) {
  const timeLine = Array(24);

  matchedEventList.forEach((list) => {
    const startTime = Number(list.startTime.substring(0, 2));
    const endTime = Number(list.endTime.substring(0, 2));
    const duration = endTime - startTime;

    for (let i = startTime; i < startTime + duration; i++) {
      if (list.eventDate === date) {
        timeLine[i] = [list.eventName, list.id];
      }
    }
  });

  // h2 주변에 div 없애기
  return (
    <div className={styles.TimeTable}>
      <div><h2 className={styles.date}>{moment(date).format("DD")}</h2></div>
      {
        [...timeLine].map((list, index) => {
          return (
            list
              ? <Link
                  to={`/events/${list[1]}`}
                  className={styles.link}
                >
                  <div
                    key={index}
                    value={list[1]}
                    className={styles.matchedTime}
                  >
                    {list[0]}
                  </div>
                </Link>
              : <div key={index}></div>
          );
        })
      }
    </div>
  );
}
