import React from 'react';
import styles from './Header.module.css';
import format from 'date-fns/format'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

export default function GetDate() {

  const getYear = format(new Date(), "yyyy");
  const getMonth = format(new Date(), "MMM");
  const getDay = format(new Date(), "do")

  // const [newYear, setNewYear] = useState(getYear);
  // const [newMonth, setNewMonth] = useState(getMonth);
  // const [newDay, setNewDay] = useState(getDay);

  return (
    <div className={styles.date}>
      <div className={styles.nav_btn_wrap}>
        <button className={styles.prev_btn} ><GrFormPrevious /></button>
        <button className={styles.next_btn} ><GrFormNext /></button>
      </div>

      <div>
        <span className={styles.year}>{getYear}</span>
        <span className={styles.month}>{getMonth}</span>
      </div>
      <div className={styles.day}>{getDay}</div>

    </div>
  );
}