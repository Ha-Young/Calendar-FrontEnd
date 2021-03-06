import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Header.module.css";

// TODO: Create your own header.
export default function Header () {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li><Link to='/' className={styles.link}>Main</Link></li>
          <li><Link to='/event/new' className={styles.link}>Event</Link></li>
          <li><Link to='/calendar' className={styles.link}>Calendar</Link></li>
        </ul>
      </nav>
    </header>
  );
}
