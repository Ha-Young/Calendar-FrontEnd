import React from 'react';
import { Link } from 'react-router-dom';
import styles from './TimeCell.module.css';

export default function TimeCell({ event }) {
  return (
    <>
      {
        event ?
        <div className={styles.TimeCell}></div>
        :
        <div className={styles.TimeCell}></div>
      }
    </>
  );
}

/*

<Link to={`/event/${event.id}`} className={styles.TimeCell}>
          {event.title}
        </Link>

*/
