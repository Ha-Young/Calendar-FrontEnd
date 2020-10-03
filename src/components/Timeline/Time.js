import React from 'react';
import styles from './Timeline.module.css';
import { time } from '../../constants';

export default function TimeBar() {
  const hour = time.filter(time => Number.isInteger(time) === true);
  const hourUnit = hour.map((hour) => {
    let presentHour = hour;

    if ((hour + '').length === 1) {
      presentHour = '0' + hour;
    }

    return (
      <div key={hour} className={styles.Hour}>{presentHour}:00</div>
    );
  });

  return (
    <div className={styles.Time}>
      {hourUnit}
    </div>
  );
}
