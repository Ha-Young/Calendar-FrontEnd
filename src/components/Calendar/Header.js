import React from "react";
import styles from "./Calendar.module.css";

export default function Header() {
  return (
    <div className={styles.DayHeader}>
      <div className={styles.EachDay}>SUN</div>
      <div className={styles.EachDay}>MON</div>
      <div className={styles.EachDay}>TUE</div>
      <div className={styles.EachDay}>WED</div>
      <div className={styles.EachDay}>THU</div>
      <div className={styles.EachDay}>FIR</div>
      <div className={styles.EachDay}>SAT</div>
    </div>
  )
}
