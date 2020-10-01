import React from 'react';

import styles from './CustomInput.module.scss';

export default function CustomInput({
  handleChange,
  label,
  value,
  ...otherProps
}) {
  return (
    <div className={styles.group}>
      <input onChange={handleChange} value={value} {...otherProps} />
      {label ? (
        <label className={value.length ? styles.shrink : ''}>{label}</label>
      ) : null}
    </div>
  );
}
