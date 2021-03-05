import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Header.module.css"

export default function Header () {
  return (
    <header className={styles.Header}>
      <nav>
        <ul>
          <li><Link to='/'>Menu 1</Link></li>
          <li><Link to='/event'>Menu 2</Link></li>
        </ul>
      </nav>
    </header>
  );
}
