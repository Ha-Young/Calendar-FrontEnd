import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

// TODO: Create your own header.
export default function Header () {
  return (
    <header>
      <div className={styles.TopMenu}>
        <Link to='/'></Link>
        <Link to='/calendar'>
          <button className={styles.Daily}>일별</button>
        </Link>
        <Link to='/weekly'>
          <button className={styles.Weekly}>주별</button>
        </Link>
        <Link to='/events'>
          <button className={styles.PlusEvent}>일정추가하기</button>
        </Link>
        <div className={styles.Todaybox}>
          <button className={styles.Previous}>&lt;</button>
          <div className={styles.Today}>2020/9/30</div>
          <button className={styles.Next}>&gt;</button>
        </div>
        <ul>
          {/* <li><Link to='/event/:eventId'>dailyEvent</Link></li> */}
        </ul>
      </div>
    </header>
  );
}
