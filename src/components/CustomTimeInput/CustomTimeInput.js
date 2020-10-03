import React from 'react';

import styles from './CustomTimeInput.module.scss';
import { TIMELINE_12_SET } from '../../constants/calendar.constants';

export default function CustomTimeInput({
  startHour,
  endHour,
  handleChange,
  disabled,
}) {
  return (
    <div className={styles.CustomTimeInput}>
      <label>Start</label>
      <select
        name='startHour'
        value={startHour}
        onChange={handleChange}
        disabled={disabled}
      >
        {TIMELINE_12_SET.map((hour, idx) => (
          <option key={idx} value={idx}>
            {hour}
          </option>
        ))}
      </select>
      <label>End</label>
      <select
        name='endHour'
        value={endHour}
        onChange={handleChange}
        disabled={disabled}
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
