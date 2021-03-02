import React from "react";
import styles from "./Day.module.css";

export default function DayCell({ value }) {
  return (
    <div className={`${styles.cell}`}>
      <span className={`${styles.spanWrapper}`}>{value}</span>
    </div>
  );
}
