import React from 'react';
import styles from './Date.module.css';

function Date () {
  return (
    <div className={styles.Date}>
      <div className={styles.Dayofweek}>수요일</div>
      <div className={styles.Day}>30</div>
    </div>
  );
}

export default Date;
