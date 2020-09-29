import React from 'react';
import styles from './DailyCard.module.css';

import TimeCell from '../TimeCell/TimeCell';

export default function DailyCard() {
  const arr = Array.from({ length: 24 });

  return (
    <div className={styles.DailyCard}>
      DailyCard
      {arr.map(() => {
        return <TimeCell />;
      })}
    </div>
  );
}