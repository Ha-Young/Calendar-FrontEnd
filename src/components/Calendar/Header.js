import React from "react";
import styles from "./Calendar.module.css";

export default function Header() {
  return (
    <thead>
      <tr>
        <th className={styles.th}>SUN</th>
        <th className={styles.th}>MON</th>
        <th className={styles.th}>TUE</th>
        <th className={styles.th}>WED</th>
        <th className={styles.th}>THU</th>
        <th className={styles.th}>FIR</th>
        <th className={styles.th}>SAT</th>
      </tr>
    </thead>
  )
}
