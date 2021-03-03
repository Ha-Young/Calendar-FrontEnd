import React from "react";
import styles from "./Calendar.module.css";

export default function Calendar({ day, dayID, onClickDate }) {
  const result = [];

  for (let i = 0; i < 24; i++) {
    result.push(i);
  }

  return (
    <>
      <div className={styles["day-box"]}>
        {day}
      </div>
      {result.map((time) => {
        return (
          <div
            // onClick={(e) => onClickDate(`${dayID}-${time}`)}
            onClick={(e) => onClickDate(e)}
            data-id={`${dayID}-${time}`}
            key={time}
            className={styles["day-box"]}
          >
          </div>
        );
      })}
    </>
  );
}

 // 이벤트가 여기까지 넘어와서 이벤트 여부에 따른 분기점 트리거를 넘겨줌 예를 들면
 // data-id or null을 넘겨 이 둘에 대한 분기점으로 해결해보자
