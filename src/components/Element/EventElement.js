import React from "react";
import { Link } from "react-router-dom";
import styles from "./Element.module.css";

export default function EventElement({ eventDay, event, hour }) {
  const pathname = event ? `/event/${hour}` : `/event/${hour}/new`;
  return (
    <div className={styles.time_flex}>
      <Link
        to={{
          pathname,
          state: {eventDay, event, hour}
        }}
      >
        {event
          ? <div className={styles.event}>{event.title}</div>
          : <div className={styles.plain}></div>
        }
      </Link>
    </div>
  );
}
