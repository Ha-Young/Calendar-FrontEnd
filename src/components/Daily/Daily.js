import React from 'react';
import DailyTimeBar from './DailyTimeBar/DailyTimeBar';
import eachTimes from '../../constants/eachTimes';

import { format } from 'date-fns'


import styles from "./Daily.module.css";
import DateHeader from '../DateHeader/DateHeader';

export default function Daily({ event }) {
  const currentDate = format(new Date(), "MMMM d, yyyy");

  return (
    <div className={styles.Daily}>
      <DateHeader currentDate={currentDate} />
      {
        eachTimes.map((eachTime, index) => (
          <DailyTimeBar key={index} eachTime={eachTime}/>
        ))
      }
    </div>
  );
}
