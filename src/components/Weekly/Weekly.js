import React from 'react';
import styles from './Weekly.module.css';
import Todo from '../Todo/Todo';
import Timeline from '../Timeline/Timeline';
import Date from '../CalendarItemHeader/CalendarItemHeader';

const timeRange = new Array(7).fill(0);

function Weekly () {
  return (
    <div className={styles.WeeklyOutline}>
      <div className={styles.SevenDays}>
        {
          timeRange.map((item, index) => {
            return (
              <Date key={index} />
            )
          })
        }
      </div>
      <div className={styles.TimeTable}>
        <Timeline />
        {/* 재사용가능하게 바꾸기 */}
        <div className={styles.box}>
          <Todo />
        </div>
        <div className={styles.box}>
          <Todo />
        </div>
        <div className={styles.box}>
          <Todo />
        </div>
        <div className={styles.box}>
          <Todo />
        </div>
        <div className={styles.box}>
          <Todo />
        </div>
        <div className={styles.box}>
          <Todo />
        </div>
        <div className={styles.box}>
          <Todo />
        </div>
      </div>
    </div>
  );
}

export default Weekly;
