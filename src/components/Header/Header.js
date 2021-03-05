import React from 'react';
import { Link } from 'react-router-dom';

import styles from "./Header.module.css";

export default function Header () {
  return (
    <header className={styles.Header}>
      <nav>
        <ul className={styles.Ul}>
          <li><Link to='/'>Calendar</Link></li>
          <li><Link to='/event/new'>NEW Event</Link></li>
        </ul>
      </nav>
    </header>
  );
}
