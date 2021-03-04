import React from 'react';
import styles from './DateInputForm.module.scss';

const DateInputForm = ({ className, value, onChangeEvent }) => {
  return (
    <div className={`${styles.dateInputWrapper} ${className}`}>
      <input type="date" onChange={onChangeEvent} value={value} />
    </div>
  );
}

export default DateInputForm;
