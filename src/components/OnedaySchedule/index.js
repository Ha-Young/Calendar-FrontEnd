import React from "react";
import styles from "./OnedaySchedule.module.css";

export default function OnedaySchedule({ title }) {
  return (
    <div className={styles.OnedaySchedule}>
      <div className={styles.title}><p className={styles.text}>{title}</p></div>
        {
          Array(24).fill(0).map((event, idx) =>
            <div key={idx} className={styles.cell}>{event}</div>
          )
        }
      </div>
  )
}
