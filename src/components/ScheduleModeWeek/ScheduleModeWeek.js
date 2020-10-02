import React from 'react';
import ScheduleHeader from '../ScheduleHeader/ScheduleHeader';
import ScheduleItem from '../ScheduleItem/ScheduleItem';
import TimeBar from '../TimeBar/TimeBar';
import styles from './ScheduleModeWeek.module.css';

const days = [ "일", "월", "화", "수", "목", "금", "토" ];
const ScheduleModeWeek = ({ dateState }) => {
  return (
    <div className={styles.ScheduleModeWeek}>
      <div className={styles.ViewHeader}>
        {days.map((day, i) => <ScheduleHeader key={i} day={day} date={dateState.weekDates[i]}/>)}
      </div>
      <div className={styles.TimeWrapper}>
        <TimeBar />
        {days.map((_, i) => <ScheduleItem key={i} dayIndex={i}/>)}
      </div>
    </div>
  );
};

export default ScheduleModeWeek;
