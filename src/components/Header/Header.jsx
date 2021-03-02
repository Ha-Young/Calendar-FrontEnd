import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Header.module.css";

export default function Header () {
  return (
    <header className={styles.wrapper}>
      <nav>
        <ul>
          <li><Link to='/calendar/daily'>Daily Calendar</Link></li>
          <li><Link to='/calendar/weekly'>Weekly Calendar</Link></li>
          <li><Link to='/events/new'>Create Event</Link></li>
          <li><Link to='/events/eventId'>Create Event</Link></li>
        </ul>
      </nav>
    </header>
  );
}
