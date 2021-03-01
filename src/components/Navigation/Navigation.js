import React from "react";
import { NavLink } from 'react-router-dom';
import styles from "./Navigation.module.css";

const Navigation = function () {
  return (
    <nav>
      <ul className={styles["navigation-list"]}>
        <li className={styles["navigation-tab"]}>
          <NavLink exact to="/calendar">Calendar</NavLink>
        </li>
        <li className={styles["navigation-tab"]}>
          <NavLink to="/events">Events</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
