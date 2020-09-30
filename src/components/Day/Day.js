import React from 'react';
import styles from './Day.module.css';
import TimeLine from 'components/TimeLine/TimeLine';
import Cell from 'components/Cell/Cell';

const Day = () => {
  return (
    <>
      <div className={styles.day}><h1>10월</h1></div>
      <div className={styles.flexBox}>
      <TimeLine />
      <Cell />
      </div>
    </>
  );
};

export default Day;
