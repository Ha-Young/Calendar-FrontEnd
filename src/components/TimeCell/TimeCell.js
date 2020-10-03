import React from 'react';
import { Link } from 'react-router-dom';
import styles from './TimeCell.module.css';

const TimeCell = ({ weekIndex, timeIndex, dateState }) => {
  const { year, month, date } = dateState;
  const path = `${year}-${month}-${date}`;
  const search = `?weekIndex=${weekIndex}&timeIndex=${timeIndex}`;

  return (
    <Link
      to={{
        pathname: `/events/${path}`,
        search: search,
      }}
    >
      <div
        id={`timecell-${path}`}
        className={styles.TimeCell}
      />
    </Link>
  );
};

export default TimeCell;
