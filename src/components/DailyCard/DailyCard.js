import React, { useEffect, useState } from 'react';
import styles from './DailyCard.module.css';

import TimeCell from '../TimeCell/TimeCell';

export default function DailyCard({ date, events }) {
  const [timeCellList, setTimeCellList] = useState(Array.from({ length: 24 }));

  useEffect(() => {
    if (!events) return;

    const timeCellList = Array.from({ length: 24 });

    events.forEach((event) => {
      const startTime = parseInt(event.startTime.substring(0, 2));
      const endTime = parseInt(event.endTime.substring(0, 2));
      const duration = endTime - startTime;

      for (let i = startTime; i <= startTime + duration; i++) {
        timeCellList[i] = event;
      }
    });

    setTimeCellList(timeCellList);
  }, [events]);

  return (
    <div className={styles.DailyCard}>
      <div>{date.dayStringify}</div>
      <div>{date.selectedDay}</div>
      {timeCellList.map((event, idx) => {
        if (event) {
          return (<TimeCell key={idx} event={event} />);
        }
        return (<TimeCell key={idx} />);
      })}
    </div>
  );
}
