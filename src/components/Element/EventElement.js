import React from "react";
import { Link } from "react-router-dom";
import styles from "./Element.module.css";

export default function EventElement({ eventDay, hour, event }) {
  return (
    <div className={styles.time_flex}>
      {event ? (
        <Link
          to={{
            pathname: `/event/${hour}`,
            state: {eventDay, event}
          }}
        >
          <div className={styles.event}>
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
          <div className={styles.plain}></div>
        </Link>
      )}
    </div>
  );
}
