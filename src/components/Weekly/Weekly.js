import React from 'react';
import styles from './Weekly.module.css';
import Todo from '../Todo/Todo';
import Timeline from '../Timeline/Timeline';
import CalendarItemHeader from '../CalendarItemHeader/CalendarItemHeader';

const timeRange = new Array(7).fill(0);

function Weekly () {
  return (
    <div className={styles.WeeklyOutline}>
      <div className={styles.SevenDays}>
        {
          timeRange.map((item, index) => {
            return (
              <CalendarItemHeader key={index} />
            )
          })
        }
      </div>
      <div className={styles.TimeTable}>
        <Timeline />
        {
          timeRange.map((item, index) => {
            return (
              <div className={styles.box} key={index}>
                <Todo />
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default Weekly;
