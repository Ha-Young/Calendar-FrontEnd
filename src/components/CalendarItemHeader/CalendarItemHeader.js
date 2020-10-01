import React from 'react';
import styles from './CalendarItemHeader.module.css';

function CalendarItemHeader ({ day, date }) {
  return (
    <div className={styles.Date}>
      <div className={styles.Dayofweek}>{day}</div>
      <div className={styles.Day}>{date}</div>
    </div>
  );
}

export default CalendarItemHeader;
