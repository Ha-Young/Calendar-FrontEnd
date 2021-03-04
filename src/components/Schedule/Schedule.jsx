import React from "react";

import styles from "./Schedule.module.css";

function Schedule({ event }) {
  const { title, content, start, end } = event;
  const height = (end - start) * 50;

  return (
    <div
      className={styles.schedule}
      style={{height: `${height}px`}
    }>
      <div>{title}</div>
      <div>{content}</div>
    </div>
  );
}

export default Schedule;
