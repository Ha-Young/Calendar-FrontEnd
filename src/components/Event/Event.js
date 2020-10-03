import React from "react";
import { Link } from "react-router-dom";
import styles from "./Event.module.css";

export default function Event({
  eventId,
  eventDetails,
}) {
  const {
    title,
    startTime,
    finishTime,
  } = eventDetails;

  return (
    <Link to={`/events/${eventId}`}>
      <div className={styles.Event}>
        <h3>{title}</h3>
      </div>
    </Link>
  );
}
