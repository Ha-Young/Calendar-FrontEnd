import React from 'react';
import styles from './ScheduleHeader.module.css';

const ScheduleHeader = ({ day, date }) => {
  return (
    <div className={styles.ScheduleHeader}>
      <div className={styles.HeaderTitle}>{day}</div>
      <div className={styles.HeaderDate}>{date}</div>
    </div>
  );
};

export default ScheduleHeader;
