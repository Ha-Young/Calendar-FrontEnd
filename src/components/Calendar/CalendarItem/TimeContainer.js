import { TIME_FROM } from "../../../constants/time";
import React from "react";
import styles from "./TimeContainer.module.css"

export default function TimeContainer() {
  return (
    <div className={styles.timeContainer}>
      {TIME_FROM.map((item) => (
        <div key={item}>
          <span className={styles.timeRow}>{item}</span>
        </div>
      ))}
    </div>
  );
}
