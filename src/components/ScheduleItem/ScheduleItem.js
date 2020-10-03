import React from 'react';
import TimeCell from '../TimeCell/TimeCell';
import EventContainer from '../../containers/EventContainer';
import styles from './ScheduleItem.module.css';

const countArr = new Array(24).fill();
const ScheduleItem = ({ weekIndex, dateState }) => {
  return (
    <div className={styles.ScheduleItem}>
      <div className={styles.ScheduleTimeWrapper}>
        <EventContainer weekIndex={weekIndex}/>
        {countArr.map((_, i) => <TimeCell key={i} weekIndex={weekIndex} timeIndex={i} dateState={dateState}/>)}
      </div>
    </div>
  );
};

export default ScheduleItem;
