import React from 'react';
import styles from './CalendarItemHeader.module.css';

function CalendarItemHeader ({ currentDisplayDay, currentDisplayDayOfWeek }) {
  return (
    <div className={styles.Date}>
      <div className={styles.Dayofweek}>{currentDisplayDayOfWeek}</div>
      <div className={styles.Day}>{currentDisplayDay}</div>
    </div>
  );
}

export default CalendarItemHeader;
