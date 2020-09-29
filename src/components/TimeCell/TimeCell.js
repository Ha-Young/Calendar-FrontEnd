import React from 'react';
import styles from './TimeCell.module.css';

export default function TimeCell({ event }) {
  return (
    <div className={styles.TimeCell}>
      {event ? event.title : 'TimeCell'}
    </div>
  );
}