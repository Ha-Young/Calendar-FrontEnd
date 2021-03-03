import React from "react";
import { NavLink } from 'react-router-dom';
import styles from "./Navigation.module.css";

const Navigation = function () {
  return (
    <nav>
      <input type="checkbox" id="menu-toggle" />
      <label htmlFor="menu-toggle">
        <span>&times;</span>
        <span>&#9776;</span>
      </label>
      <ul className={styles["navigation-list"]}>
        <li className={styles["navigation-tab"]}>
          <NavLink exact to="/calendar">Calendar</NavLink>
        </li>
        <li className={styles["navigation-tab"]}>
          <NavLink to="/events/new">New Event</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
