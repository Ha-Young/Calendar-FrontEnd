import React from "react";
import { Link, useLocation } from "react-router-dom";

import styles from "./Events.module.css";

export default function EventDetail({ removeEvents }) {
  const location = useLocation();

  const eventData = {...location.state};
  const { date, startAt, endAt, title, detail, userId } = eventData;

  return (
    <div className={styles.eachEvent}>
      <span>{date}</span>
      <span>from {startAt} to {endAt}</span>
      <span>title: {title}</span>
      <span>{detail}</span>
      <button onClick={() => removeEvents(userId, date, startAt, endAt)}>
        DEL
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
