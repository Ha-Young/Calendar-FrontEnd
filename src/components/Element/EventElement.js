import React from "react";
import styles from "./Element.module.css";
import { Link } from "react-router-dom";

export default function EventElement({ hour, event }) {
  return (
    <>
      {event ? (
        <Link to={`/event/${hour}`}>
          <div className={styles.daily_hour}>
            {hour}
          </div>
          <div className={styles.daily_event}>
            {event.title}
          </div>
        </Link>
      ):(
        <Link to={`/event/${hour}/new`}>
          <div className={styles.daily_hour}>
            {hour}
          </div>
        </Link>
      )}
    </>
  );
}
