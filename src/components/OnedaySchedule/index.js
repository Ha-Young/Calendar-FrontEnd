import React from "react";
import styles from "./OnedaySchedule.module.css";

export default function OnedaySchedule() {

  return (
    <div className={styles.OnedaySchedule}>
      <div className={styles.title}><p className={styles.text}>title</p></div>
        {
          Array(24).fill(0).map((x, idx) => 
            <div key={idx} className={styles.cell}>{x}</div>
          )
        }
      </div>
  )
}
