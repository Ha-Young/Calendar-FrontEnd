import React from "react";
import styles from "./TimeIndicator.module.css";
import getIndicatingTime from "../../utils/getIndicatingTime"

export default function TimeIndicator() {
  return (
    <div className={styles.indicator}>
      <div>
        {
          Array(24).fill(0).map((value, idx) =>
            <div className={styles.cell} key={idx}>
              <p className={styles.text}>{getIndicatingTime(value, idx)}</p>
            </div>
          )
        }
      </div>
    </div>
  )
}
