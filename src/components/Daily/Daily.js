import React from 'react';
import DailyTimeBar from './DailyTimeBar/DailyTimeBar';
import eachTimes from '../../constants/eachTimes';

import styles from "./Daily.module.css";

export default function Daily({ event }) {
  return (
    <div className={styles.Daily}>
      {
        eachTimes.map((eachTime, index) => (
          <DailyTimeBar key={index} eachTime={eachTime}/>
        ))
      }
    </div>
  );
}
