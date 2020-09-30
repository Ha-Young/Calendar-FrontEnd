import React from 'react';
import styles from './Header.module.css';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import {format, addDays, subDays} from 'date-fns'

export default function GetDate ({
  yesterday,
  tomorrow,
  handleYesterday,
  handleTomorrow,
}) {
  const date = yesterday.date;
  const formatYear = format(date, "yyyy");
  const formatMonth = format(date, "MMM");
  const formatDay = format(date, "do")

  return (
    <div className={styles.date}>
      <div className={styles.nav_btn_wrap}>
        <button className={styles.prev_btn} onClick={handleYesterday}>
          <GrFormPrevious />
        </button>
        <button className={styles.next_btn} onClick={handleTomorrow}>
          <GrFormNext />
        </button>
      </div>
      <div>
        <span className={styles.year}>{formatYear}</span>
        <span className={styles.month}>{formatMonth}</span>
      </div>
      <div className={styles.day}>{formatDay}</div>
    </div>
  );
}
