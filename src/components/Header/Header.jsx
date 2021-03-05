import React from 'react';
import { Link } from 'react-router-dom';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import styles from "./Header.module.css";

export default function Header({ prevButtonClicked, nextButtonClicked }) {
  return (
    <header className={styles.wrapper}>
      <div className={styles.navItemWrapper}>
        <Link to='/calendar'>Calendar</Link>
      </div>
      <div className={styles.navItemWrapper}>
        <Link to='/events/new'>Create Event</Link>
      </div>
      <div className={styles.navButtonWrapper}>
        <button className={styles.changeBtn}>
          <MdNavigateBefore onClick={() => prevButtonClicked()} />
        </button>
      </div>
      <div className={styles.navButtonWrapper}>
        <button className={styles.changeBtn}>
          <MdNavigateNext onClick={() => nextButtonClicked()} />
        </button>
      </div>
    </header>
  );
}
