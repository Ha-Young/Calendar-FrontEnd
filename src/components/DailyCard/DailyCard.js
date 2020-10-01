import React, { useEffect, useState } from 'react';
import styles from './DailyCard.module.css';
import { Link } from 'react-router-dom';

import TimeCell from '../TimeCell/TimeCell';

export default function DailyCard({ date, events }) {
  const [timeCellList, setTimeCellList] = useState(Array.from({ length: 24 }));
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

    console.log(cellList);
    setCellList(cellList);

  }, [events]);

  return (
    <>
      <div className={styles.DailyCard}>
        {/* <div>{date.dayStringify}</div> */}
        <div className={styles.eventCell}>
          {cellList.map((event) => {
            return (
              <Link to={`/event/${event.id}`}>
                <div style={{
                  position: 'relative',
                  top: event.top,
                  width: '100%',
                  height: event.height,
                  backgroundColor: 'blue',
                }}>
                  <div>{event.title}</div>
                </div>
              </Link>
            );
          })}
        </div>
        <div className={styles.title}>{date}</div>
        {timeCellList.map((event, idx) => {
          return (<TimeCell className={styles.cell} key={idx} />);
        })}
      </div>
    </>
  );
}

/*

<Link to={`/event/${event.id}`} className={styles.TimeCell}>
          {event.title}
        </Link>

if (event) {
          return (<TimeCell className={styles.clickCell} key={idx} event={event} />);
        }

*/

  // useEffect(() => {
  //   if (!events) return;

  //   const timeCellList = Array.from({ length: 24 });

  //   events.forEach((event) => {
  //     const startTime = parseInt(event.startTime.substring(0, 2));
  //     const endTime = parseInt(event.endTime.substring(0, 2));
  //     const duration = endTime - startTime;

  //     for (let i = startTime; i <= startTime + duration - 1; i++) {
  //       timeCellList[i] = event;
  //     }
  //   });

  //   setTimeCellList(timeCellList);
  // }, [events]);
