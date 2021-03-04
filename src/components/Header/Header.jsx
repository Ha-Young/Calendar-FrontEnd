import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from "./Header.module.css";

// TODO: Create your own header.
export default function Header () {
  return (
    <header>
      <nav>
        <ul className={styles.navigation}>
          <li className={styles.navigationItem}>
            <NavLink exact to="/weekly">Weely</NavLink>
          </li>
          <li className={styles.navigationItem}>
            <NavLink exact to="/daily">daily</NavLink>
          </li>
          <li className={styles.navigationItem}>
            <NavLink exact to="/event/new">event</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
