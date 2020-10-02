import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './DailyCard.module.css';

import EventCell from '../EventCell/EventCell';
import TimeCell from '../TimeCell/TimeCell';

export default function DailyCard({ date, events }) {
  const [cellList, setCellList] = useState([]);

  useEffect(() => {
    if (!events.length) {
      setCellList([]);
      return;
    }

    const newCellList = [];
    const POSITION_RANGE = 60;

    events.forEach((event) => {
      const startTime = parseInt(event.startTime.substring(0, 2));
      const endTime = parseInt(event.endTime.substring(0, 2));
      const duration = endTime - startTime;

      newCellList.push({
        id: event.id,
        title: event.title,
        top: startTime * POSITION_RANGE,
        height: duration * POSITION_RANGE,
      });
    });

    setCellList(newCellList);
  }, [events]);

  return (
    <div className={styles.DailyCard}>
      <div className={styles.eventCard}>
        {
          cellList.map((event, idx) => {
            return (<EventCell key={idx} event={event} />);
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
  );
}

DailyCard.propTypes = {
  date: PropTypes.string.isRequired,
  events: PropTypes.array.isRequired
};
