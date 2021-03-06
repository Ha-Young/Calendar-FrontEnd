import React from "react";
import { Link } from "react-router-dom";
import styles from "./Element.module.css";

export default function EventElement({ eventDay, hour, event }) {
  return (
    <>
      {event ? (
        <Link
          to={{
            pathname: `/event/${hour}`,
            state: {eventDay, event}
          }}
        >
          <div className={styles.daily_hour}>
            {hour}
          </div>
          <div className={styles.daily_event}>
            {event.title}
          </div>
        </Link>
      ):(
        <Link
          to={{
            pathname: `/event/${hour}/new`,
            state: {eventDay, event}
          }}
        >
          <div className={styles.daily_hour}>
            {hour}
          </div>
        </Link>
      )}
    </>
  );
}
