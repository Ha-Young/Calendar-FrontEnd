import React from 'react';
import styles from './Calendar.module.css';

export default function Calendar () {

  return (
    <div className={styles.Calendar}>
      <div className="header">
        <button>prev</button>
        <span className={styles.title}>2020 October</span>
        <button>next</button>
      </div>
      <div className="body">
        <div> Day </div>
      </div>
    </div>
  )

}