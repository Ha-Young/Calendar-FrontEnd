import React from 'react';
import styles from './TimeBar.module.css';

const TimeBar = () => {
  const countArr = new Array(24).fill();

  return (
    <div className={styles.TimeBar}>
      <div className={styles.TimeBarWrapper}>
        {countArr.map((_, i) => <div className={styles.TimeBarItem} key={i}>{i}</div>)}
      </div>
    </div>
  );
};

export default TimeBar;
