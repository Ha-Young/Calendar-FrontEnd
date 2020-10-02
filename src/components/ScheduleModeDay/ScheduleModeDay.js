import React from 'react';
import ScheduleHeader from '../ScheduleHeader/ScheduleHeader';
import ScheduleItem from '../ScheduleItem/ScheduleItem';
import styles from './ScheduleModeDay.module.css';

const ScheduleModeDay = () => {
  return (
    <div className={styles.ScheduleModeDay}>
      <div className={styles.ViewHeader}>
        <ScheduleHeader />
      </div>
      <div className={styles.TimeWrapper}>
        <ScheduleItem />
      </div>
    </div>
  );
};

export default ScheduleModeDay;
