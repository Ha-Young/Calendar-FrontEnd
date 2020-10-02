import React from "react";
import styles from "./Header.module.css";
import NavButton from "./NavButton";

export default function DateView ({
  year,
  month,
  day,
  handleYesterday,
  handleTomorrow,
}) {
  return (
    <div className={styles.date}>
      <NavButton
        moveToYesterday={handleYesterday}
        moveToTomorrow={handleTomorrow}
      />
      <div>
        <span className={styles.year}>{year}</span>
        <span className={styles.month}>{month}</span>
      </div>
      <div className={styles.day}>{day}</div>
    </div>
  );
}
