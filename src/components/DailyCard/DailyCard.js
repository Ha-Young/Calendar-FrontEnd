import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './DailyCard.module.css';

import TimeCell from '../TimeCell/TimeCell';

export default function DailyCard({ date, events }) {
  const [cellList, setCellList] = useState([]);

  useEffect(() => {
    if (!events.length) {
      setCellList([]);
      return;
    }
    const newCellList = [];

    events.forEach((event) => {
      const startTime = parseInt(event.startTime.substring(0, 2));
      const endTime = parseInt(event.endTime.substring(0, 2));
      const duration = endTime - startTime;
      newCellList.push({
        id: event.id,
        title: event.title,
        top: startTime * 60,
        height: duration * 60,
      });
    });

    setCellList(newCellList);
  }, [events]);

  return (
    <>
      <div className={styles.DailyCard}>
        <div className={styles.eventCell}>
          {
            cellList.map((event) => {
              return (
                <Link
                  key={event.id}
                  to={`/event/${event.id}`}
                  className={styles.event}
                  style={{
                    top: event.top,
                    height: event.height,
                  }}
                >
                  {event.title}
                </Link>
              );
            })
          }
        </div>
        <div className={styles.date}>{date}</div>
        {
          Array.from({ length: 24 }).map((_, idx) => {
            return (<TimeCell key={idx} />);
          })
        }
      </div>
    </>
  );
}
