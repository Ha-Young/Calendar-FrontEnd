import React from 'react';
import styles from './ColorInputForm.module.scss'

const ColorInputForm = ({ className, value, onChangeEvent }) => {
  return (
    <div className={`${styles.colorInputWrapper} ${className}`}>
      <input type="color" onChange={onChangeEvent} value={value} />
    </div>
  );
}

export default ColorInputForm;
