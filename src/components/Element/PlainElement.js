import React from "react";
import styles from "./Element.module.css";
import { Link } from "react-router-dom";

export default function PlainElement({ hour }) {
  return (
    <Link to={`/event/${hour}/new`}>
      <div className={styles.daily_hour}>
        {hour}
      </div>
    </Link>
  );
}
