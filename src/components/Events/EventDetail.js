import React from "react";
import { Link, useLocation } from "react-router-dom";

import styles from "./Events.module.css";

export default function EventDetail({ removeEvents }) {
  const location = useLocation();

  const eventData = {...location.state};
  const { date, startAt, endAt, title, detail, userId } = eventData;
  return (
    <div className={styles.eventForm}>
      <div className={styles.eachInfo}>{date}</div>
      <div className={styles.eachInfo}>Time: {startAt} ~ {endAt}</div>
      <div className={styles.eachInfo}>Title: {title}</div>
      <div className={styles.eachInfo}>Detail: {detail}</div>
      <button
        onClick={() => removeEvents(userId, date, startAt, endAt)}>
        <span>DEL</span>
      </button>
      <button>
        <Link to={{
          pathname: `/event/edit/${date}/${startAt + endAt}`,
          state: {...eventData},
        }}>
          EDIT
        </Link>
      </button>
    </div>
  );
}
