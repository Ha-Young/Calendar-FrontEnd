import React from 'react';
import styles from './DateChanger.module.css';

const DateChanger = ({ onClick, year, month }) => {
  return (
    <div className={styles.changeButton}>
      <button name='prev' onClick={onClick}>PREV</button>
      <div className={styles}>
        <h1>{year}/{month}</h1>
      </div>
      <button name='next' onClick={onClick}>NEXT</button>
    </div>
  );
};

export default DateChanger;
