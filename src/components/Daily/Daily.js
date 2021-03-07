import React, { useState, useEffect } from 'react';
import DailyTimeBar from './DailyTimeBar/DailyTimeBar';
import eachTimes from '../../constants/eachTimes';

import { format } from 'date-fns'


import styles from "./Daily.module.css";
import DateHeader from '../DateHeader/DateHeader';
import getOnlyHours from '../../utils/getOnlyHours';

export default function Daily({ events }) {
  const [currentDate, setCurrentDate] = useState(format(new Date(), "yyyy-MM-dd"));
  const [headerDate, setHeaderDate] = useState(format(new Date(), "MMMM d, yyyy"));

  console.log(events);

  const { byDateAndTime, allDateAndTime = [] } = events;

  return (
    <div className={styles.Daily}>
      <DateHeader headerDate={headerDate} />
      {
        eachTimes.map((eachTime, index) => {
          let eventTitle = "";
          let eventSpace = "";

          for (let i = 0; i < allDateAndTime.length; i++) {
            const event = byDateAndTime[allDateAndTime[i]];
            const startTime = getOnlyHours(event.startTime);
            const endTime = getOnlyHours(event.endTime);

            if (event.date === currentDate) {
              if (startTime === index) {
                eventTitle = event.title;
              }
              if (startTime <= index || index <= endTime) {
                eventSpace = "eventSpace"
              }
            }
          }

          return (
            (eventTitle || eventSpace) ?
              <DailyTimeBar
                key={index}
                eachTime={eachTime}
                className={eventSpace}
                eventTitle={eventTitle}
              />
            : <DailyTimeBar key={index} eachTime={eachTime} />
          );
        })
      }
    </div>
  );
}
