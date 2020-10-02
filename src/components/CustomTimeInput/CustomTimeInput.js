import React from 'react';

import styles from './CustomTimeInput.module.scss';
import { TIMELINE_12_SET } from '../../constants/calendar.constants';

export default function CustomTimeInput({ value, startHandler, endHandler }) {
  return (
    <div className={styles.CustomTimeInput}>
      <label>Start</label>
      <select
        name='start'
        value={value.startHour}
        onChange={ev => startHandler(ev.target.value)}
      >
        {TIMELINE_12_SET.map((hour, idx) => (
          <option key={idx} value={idx}>
            {hour}
          </option>
        ))}
      </select>
      <label>End</label>
      <select
        name='end'
        value={value.endHour}
        onChange={ev => endHandler(ev.target.value)}
      >
        {TIMELINE_12_SET.map((hour, idx) => (
          <option key={idx} value={idx}>
            {hour}
          </option>
        ))}
      </select>
    </div>
  );
}
