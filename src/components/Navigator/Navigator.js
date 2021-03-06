import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Navigator.module.css";

// TODO: Create your own header.
export default function Navigator() {
  return (
    <header className={styles.Navigator}>
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
