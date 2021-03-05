import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Header.module.css";

// TODO: Create your own header.
export default function Header () {
  return (
    <header className={styles.Header}>
      <nav>
        <ul>
          <li><Link to='/week'>Week</Link></li>
          <li><Link to='/day'>Day</Link></li>
          <li><Link to='/events/new'>Event</Link></li>
        </ul>
      </nav>
    </header>
  );
}
