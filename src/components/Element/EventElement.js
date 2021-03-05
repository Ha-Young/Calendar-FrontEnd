import React from "react";
import styles from "./Element.module.css";
import { Link } from "react-router-dom";

export default function EventElement({ hour, title }) {
  return (
    <Link to={`/event/${hour}`}>
      <div className={styles.daily_hour}>
        {hour}
      </div>
      <div className={styles.daily_event}>
        {title}
      </div>
    </Link>
  );
}
