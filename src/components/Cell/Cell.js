import React from 'react';
import styles from './Cell.module.css';
import { Link } from 'react-router-dom';

const Cell = () => {
  const cells = [];

  for (let i = 0; i < 24; i++) {
    cells.push(
      <Link to='/events/:eventId'>
        <div className={styles.cell}></div>
      </Link>)
  }

  return (
    <div className={styles.cells}>
      {
        cells.map(cell => cell)
      }
    </div>
  );
};

export default Cell;
