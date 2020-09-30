import React from "react";
import styles from "./styles.module.css";
import moment from "moment";

export default function TimeTable ({ date, dayOfEvents }) {
  const timeLine = Array(24);

  // const timeDiff = (start, end) => {
  //   return Number(end.substring(0, 2)) - Number(start.substring(0, 2))
  // };

  // const mapped = dayOfEvents.map((item) => {
  //   return [item.startTime.substring(0, 2), timeDiff(item.startTime, item.endTime), item.eventName];
  // });

  // console.log(mapped);

  return (
    <div className={styles.TimeTable}>
      <div><h2>{moment(date).format("DD")}</h2></div>
      {
        [...timeLine].map((time, index) => {
          return <div key={index}></div>
        })
      }
    </div>
  );
}
