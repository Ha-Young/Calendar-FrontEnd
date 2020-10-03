import React from 'react';
import styles from './CalendarItemHeader.module.css';

function CalendarItemHeader ({ date, day }) {
  return (
    <div className={styles.DateDisplayBox}>
      <div className={styles.Day}>{day}</div>
      <div className={styles.Date}>{date}</div>
    </div>
  );
}

export default CalendarItemHeader;
