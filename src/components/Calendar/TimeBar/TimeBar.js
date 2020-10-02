import React from "react";
import styles from "./TimeBar.module.css";
import { TIMEBAR_TIME } from "../../../constants";

export default function TimeBar() {
  return (
    <ul className={styles.TimeBar}>
      {
        TIMEBAR_TIME.map(time => {
          return <li key={time}>{time}</li>;
        })
      }
    </ul>
  );
}
