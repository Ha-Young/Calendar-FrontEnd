import React from 'react';
import { Link, Route } from 'react-router-dom';
import styles from './Calendar.module.css';

export default function Daily() {

  return (
    <div className={styles.table}>
      {[...Array(25)].map((_, index) => {
        return <div key={index} className={styles.item}>{index}:00</div>;
      })}
    </div>
  );
}
