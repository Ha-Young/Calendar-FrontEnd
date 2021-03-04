import React from "react";
import { useHistory } from "react-router-dom";

import styles from "./Schedule.module.css";

function Schedule({ event, date }) {
  const { title, content, start, end } = event;
  const height = (end - start) * 50;
  const history = useHistory();

  function handleClick() {
    history.push(`/events/${date}_${start}`);
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
