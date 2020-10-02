import React from 'react';
import styles from './DateChanger.module.css';

const DateChanger = ({onClick, year, month}) => {
  return (
    <div className={styles.changeButton}>
      <button name='prev' onClick={onClick}>PREV</button>
      <div><h1>{year}</h1></div>
      <div><h1>{month}</h1></div>
      <button name='next' onClick={onClick}>NEXT</button>
    </div>
  );
};

export default DateChanger;
