import React from 'react';
import styles from './Day.module.css';
import TimeLine from 'components/TimeLine/TimeLine';
import Cell from 'components/Cell/Cell';

const Day = ({ day }) => {
  return (
    <>
      <div className={styles.day}><h1>{day}</h1></div>
      <div className={styles.cellContainer}>
        <TimeLine />
        <Cell />
      </div>
    </>
  );
};

export default Day;
