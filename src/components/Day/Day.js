import React from 'react';
import Cell from 'components/Cell/Cell';
import TimeLine from 'components/TimeLine/TimeLine';
import styles from './Day.module.css';

const Day = ({ day }) => {
  return (
    <>
      <div className={styles.day}><h2>{day}</h2></div>
      <div className={styles.cellContainer}>
        <TimeLine />
        <Cell />
      </div>
    </>
  );
};

export default Day;
