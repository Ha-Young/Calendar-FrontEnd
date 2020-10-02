import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header ({ onNextButtonClick, currentDisplayDate }) {
  return (
    <header>
      <div className={styles.TopMenu}>
        <Link to='/'></Link>
        <Link to='/calendar'>
          <button
            className={styles.Daily}
            onClick={() => {

            }}>
            일별
          </button>
        </Link>
        <Link to='/weekly'>
          <button
            className={styles.Weekly}
            onClick={() => {
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
          <button
            className={styles.Previous}
            onClick={() => {
            }}
          >
            &lt;
          </button>
          <div className={styles.Today}>{currentDisplayDate}</div>
          <button
            className={styles.Next}
            onClick={() => {
              onNextButtonClick();
            }}
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
