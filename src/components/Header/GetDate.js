import React from 'react';
import styles from './Header.module.css';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

export default function GetDate ({
  year,
  month,
  day,
  handleYesterday,
  handleTomorrow,
}) {
  // 어제 오늘 나눌 필요 있을까?? 없으면 HeaderContainer 에서 yesterday랑 tomorrow 합쳐서 하나로 만들기
  
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
        <span className={styles.year}>{year}</span>
        <span className={styles.month}>{month}</span>
      </div>
      <div className={styles.day}>{day}</div>
    </div>
  );
}
