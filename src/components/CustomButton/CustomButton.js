import React from 'react';

import styles from './CustomButton.module.scss';

export default function CustomButton({ children, ...otherProps }) {
  return (
    <button className={styles.CustomButton} {...otherProps}>
      {children}
    </button>
  );
}
