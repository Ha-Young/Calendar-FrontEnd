import React from 'react';
import styles from './ScheduleTimeItem.module.css';

const ScheduleTimeItem = ({ openDetails }) => {
  return (
    <div
      className={styles.ScheduleTimeItem}
      onClick={() => openDetails()}
    />
  );
};

export default ScheduleTimeItem;