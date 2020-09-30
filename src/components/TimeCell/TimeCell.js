import React from 'react';
import { Link } from 'react-router-dom';
import styles from './TimeCell.module.css';

export default function TimeCell({ event }) {
  return (
    <>
      {
        event ?
        <Link to={`/event/${event.id}`} className={styles.TimeCell}>
          {event.title}
        </Link>
        :
        <div className={styles.TimeCell}>TimeCell</div>
      }
    </>
  );
}