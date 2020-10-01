import React from "react";
import styles from "./styles.module.css";
import moment from "moment";
import { Link } from "react-router-dom";

export default function TimeTable ({ date, dayOfEvents }) {
  const timeLine = Array(24);

  dayOfEvents.forEach((item) => {
    const startTime = parseInt(item.startTime.substring(0, 2));
    const endTime = parseInt(item.endTime.substring(0, 2));
    const duration = endTime - startTime;

    for (let i = startTime; i < startTime + duration; i++) {
      if (item.eventDate === date) {
        timeLine[i] = [item.eventName, item.id];
      }
    }
  });

  return (
    <>
      <div className={styles.TimeTable}>
        <div><h2 className={styles.date}>{moment(date).format("DD")}</h2></div>
        {
          [...timeLine].map((item, index) => {
            return (
              item ?
                <Link to={`/events/${item[1]}`} className={styles.link}>
                  <div
                    key={index}
                    value={item[1]}
                    style={{backgroundColor: "#95A5A6", color: "white"}} // CSS module 조건부 렌더링으로 바꿀 방법 고민해보기
                  >
                    {item[0]}
                  </div>
                </Link>
              : <div key={index}>{item}</div>
            );
          })
        }
      </div>
    </>
  );
}
