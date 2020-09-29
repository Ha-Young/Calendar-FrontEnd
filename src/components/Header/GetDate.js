import React from 'react';
import styles from './Header.module.css';
import format from 'date-fns/format'

export default function GetDate() {
  // const year = moment().format("YYYY");
  // const month = moment().format("MMMM");
  // const day = moment().format("Do");

  const year = format(new Date(), "yyyy");
  const month = format(new Date(), "MMM");
  const day = format(new Date(), "do")

  return (
    <div className={styles.date}>
      <div>
        <span className={styles.year}>{year}</span>
        <span className={styles.month}>{month}</span>
      </div>
      <div className={styles.day}>{day}</div>
    </div>
  );
}