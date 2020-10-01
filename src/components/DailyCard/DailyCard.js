import React, { useEffect, useState } from 'react';
import styles from './DailyCard.module.css';
import { Link } from 'react-router-dom';

import TimeCell from '../TimeCell/TimeCell';

export default function DailyCard({ date, events }) {
  const [cellList, setCellList] = useState([]);

  useEffect(() => {
    if (!events) return;
    const cellList = [];

    events.forEach((event) => {
      const startTime = parseInt(event.startTime.substring(0, 2));
      const endTime = parseInt(event.endTime.substring(0, 2));
      const duration = endTime - startTime;
      cellList.push({
        id: event.id,
        title: event.title,
        top: startTime * 60,
        height: duration * 60,
      });
    });

    setCellList(cellList);
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
                  style={{ textDecoration: 'none' }}
                >
                  <div style={{
                    position: 'relative',
                    top: event.top,
                    width: '100%',
                    height: event.height,
                    backgroundColor: 'salmon',
                  }}>
                  <div>{event.title}</div>
                  </div>
                </Link>
              );
            })
          }
        </div>
        <div className={styles.title}>{date}</div>
        {Array.from({ length: 24 }).map((_, idx) => {
          return (<TimeCell className={styles.cell} key={idx} />);
        })}
      </div>
    </>
  );
}
