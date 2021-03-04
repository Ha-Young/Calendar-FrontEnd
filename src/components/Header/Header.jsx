import React from 'react';
import { Link } from 'react-router-dom';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import styles from "./Header.module.css";

export default function Header({ prevButtonClicked, nextButtonClicked }) {
  return (
    <header className={styles.wrapper}>
      <div className={styles.navItemWrapper}>
        <Link to='/calendar/daily'>Daily Calendar</Link>
      </div>
      <div className={styles.navItemWrapper}>
        <Link to='/calendar/weekly'>Weekly Calendar</Link>
      </div>
      <div className={styles.navItemWrapper}>
        <Link to='/events/new'>Create Event</Link>
      </div>
      <div className={styles.navItemWrapper}>
        <Link to='/events/eventId'>Event Datail / Edit</Link>
      </div>
      <div className={styles.navItemWrapper}>
        <Link to='/calendar'>new calendar.</Link>
      </div>
      day only
      <div className={styles.navButtonWrapper}>
        <button><MdNavigateBefore onClick={() => prevButtonClicked()} /></button>
      </div>
      <div className={styles.navButtonWrapper}>
        <button><MdNavigateNext onClick={() => nextButtonClicked()} /></button>
      </div>
    </header>
  );
}
