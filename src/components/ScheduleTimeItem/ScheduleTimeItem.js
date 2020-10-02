import React from 'react';
import styles from './ScheduleTimeItem.module.css';

const ScheduleTimeItem = ({ dayIndex, timeIndex, openDetails }) => {
  return (
    <div
      id={`timeItem-${dayIndex}-${timeIndex}`}
      className={styles.ScheduleTimeItem}
      onClick={(e) => openDetails(e)}
    />
  );
};

export default ScheduleTimeItem;
