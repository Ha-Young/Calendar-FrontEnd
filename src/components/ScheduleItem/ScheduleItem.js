import React from 'react';
import ScheduleTimeItemContainer from '../../containers/ScheduleTimeItemContainer';
import EventContainer from '../../containers/EventContainer';
import styles from './ScheduleItem.module.css';

const countArr = new Array(24).fill();
const ScheduleItem = ({ dayIndex }) => {
  return (
    <div className={styles.ScheduleItem}>
      <div className={styles.ScheduleTimeWrapper}>
        <EventContainer dayIndex={dayIndex}/>
        {countArr.map((_, i) => <ScheduleTimeItemContainer key={i} dayIndex={dayIndex} timeIndex={i}/>)}
      </div>
    </div>
  );
};

export default ScheduleItem;
