import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

// TODO: Create your own header.
export default function Header ({ today, setIsDailyClicked, setIsWeeklyClicked }) {
  return (
    <header>
      <div className={styles.TopMenu}>
        <Link to='/'></Link>
        <Link to='/calendar'>
          <button
            className={styles.Daily}
            onClick={() => {
              setIsDailyClicked(true);
              setIsWeeklyClicked(false);
            }}>
            일별
          </button>
        </Link>
        <Link to='/weekly'>
          <button
            className={styles.Weekly}
            onClick={() => {
              setIsWeeklyClicked(true);
              setIsDailyClicked(false);
            }}>
            주별
          </button>
        </Link>
        <Link to='/events'>
          <button
            className={styles.PlusEvent}>
            일정추가하기
          </button>
        </Link>
        <div className={styles.Todaybox}>
          <button className={styles.Previous}>&lt;</button>
          <div className={styles.Today}>{today}</div>
          <button className={styles.Next}>&gt;</button>
        </div>
        <ul>
          {/* <li><Link to='/event/:eventId'>dailyEvent</Link></li> */}
        </ul>
      </div>
    </header>
  );
}
