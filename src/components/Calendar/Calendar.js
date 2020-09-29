import React, { useState } from 'react';
import styles from './Calendar.module.css';
import Day from './Day/Day';
import Week from './Week/Week';
import TimeBar from './TimeBar/TimeBar';

export default function Calendar() {
  const [isDaily, setIsDaily] = useState(false);

  return (
    <div className={styles.container}>
      <TimeBar />
      {
        isDaily ? <Day /> : <Week />
      }
    </div>
  );
}