import React from "react";

import styles from "./Schedule.module.css";

function Schedule({ event, date, onClick }) {
  const { title, content, start, end } = event;
  const height = (end - start) * 52 - 4;

  function handleClick() {
    onClick(date, start);
  }

  return (
      <div
        className={styles.schedule}
        style={{height: `${height}px`}}
        onClick={handleClick}
      >
        <div>{title}</div>
        <div>{content}</div>
      </div>
  );
}

export default Schedule;
