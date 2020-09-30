import React from 'react';
import styles from './Weekly.module.css';
import Todo from '../Todo/Todo';
import Timeline from '../Timeline/Timeline';
import Date from '../Date/Date';

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
