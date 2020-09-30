import React from "react";
import styles from "./styles.module.css";
import moment from "moment";

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

  const handleClick = (event) => {
    console.log(event.target.getAttribute("value"));
  };
  // 내가 찾은 id에 해당하는.... 이벤트 정보를 어떻게 매칭해야할까?

  return (
    <div className={styles.TimeTable}>
      <div><h2>{moment(date).format("DD")}</h2></div>
      {
        [...timeLine].map((item, index) => {
          return (
            item
            ? <div
                key={index}
                style={{backgroundColor: "#95A5A6", color: "white"}} // CSS module 조건부 렌더링으로 바꿀 방법 고민해보기
                onClick={handleClick}
                value={item[1]}
              >
                {item[0]}
              </div>
            : <div
                key={index}
              >
                {item}
              </div>
          );
        })
      }
    </div>
  );
}
