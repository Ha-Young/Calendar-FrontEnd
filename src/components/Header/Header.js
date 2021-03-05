import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Header.module.css";

// TODO: Create your own header.
export default function Header () {
  return (
    <header className={styles.Header}>
      <nav className={styles.Nav}>
        <Link to="/calendar">
          <h1 className={styles.Title}>Calendar Viewer</h1>
        </Link>
        <ul className={styles.NavItemList}>
          <li><Link className={styles.NavItem} to='/calendar'>Calendar</Link></li>
          <li><Link className={styles.NavItem} to='/events/new'>New Event</Link></li>
        </ul>
      </nav>
    </header>
  );
}
