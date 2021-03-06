import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from "./Header.module.css";

// TODO: Create your own header.
export default function Header() {
  return (
    <header>
      <nav>
        <div className={styles.navigation}>
          <NavLink
            className={styles.navigationItem}
            exact
            to="/weekly"
          >
            Weely
          </NavLink>
          <NavLink
            className={styles.navigationItem}
            exact
            to="/daily"
          >
            daily
          </NavLink>
          <NavLink
            className={styles.navigationItem}
            exact
            to="/event/new"
          >
            event
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
