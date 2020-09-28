import React from 'react';
import styles from './Hour.module.css';

export default function Hour({ children }) {
  return (
    <div className={styles.Hour}>
      {children}
    </div>
  );
}