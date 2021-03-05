import React from "react";
import styles from "./DateIndicator.module.css";

export default function DateIndicator ({ time }) {
  const { year, month, date, day } = time;
  const ENG_DAY = ["", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const KOR_DAY = ["", "일", "월", "화", "수", "목", "금", "토"];
  return (
    <>
      <div className={styles.DateIndicator}>
        {`${year}년 `}
        {`${month}월 `}
        {`${date}일 `}
        {`${KOR_DAY[day]}`}
      </div>
    </>
  );
}
