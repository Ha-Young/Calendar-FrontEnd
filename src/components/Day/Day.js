import React from 'react';
import styles from './Day.module.css';
import TimeLine from 'components/TimeLine/TimeLine';

const Day = () => {
  const date = new Date();
  return (
    <>
      <div className={styles.day}><h1>{date.getDate()}</h1></div>
      <TimeLine />
    </>
  );
};

export default Day;
