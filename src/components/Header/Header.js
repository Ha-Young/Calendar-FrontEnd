import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header ({
  onNextButtonClick,
  onPreviousButtonClick,
  onWeeklyButtonClick,
  onDailyButtonClick,
  currentDisplayToday
}) {
  return (
    <header>
      <div className={styles.TopMenu}>
        <Link to='/'/>
        <Link to='/calendar'>
          <button
            className={styles.DailyButton}
            onClick={onDailyButtonClick}>
            일별
          </button>
        </Link>
        <Link to='/weekly'>
          <button
            className={styles.WeeklyButton}
            onClick={onWeeklyButtonClick}>
            주별
          </button>
        </Link>
        <Link to='/events'>
          <button
            className={styles.PlusEventButton}>
            일정추가하기
          </button>
        </Link>

        <div className={styles.Todaybox}>
          <button
            className={styles.Previous}
            onClick={onPreviousButtonClick}
          >
            &lt;
          </button>
          <div className={styles.Today}>{currentDisplayToday}</div>
          <button
            className={styles.Next}
            onClick={onNextButtonClick}
          >
            &gt;
          </button>
        </div>
        <ul>
          {/* <li><Link to='/event/:eventId'>dailyEvent</Link></li> */}
        </ul>
      </div>
    </header>
  );
}
