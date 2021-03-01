import React from 'react';
import { NavLink } from 'react-router-dom';
import HeaderStyles from "./Header.module.css";

export default function Header() {
  return (
    <header>
      <nav>
        <ul className={HeaderStyles["navigation"]}>
          <li className={HeaderStyles["navigation-tab"]}>
            <NavLink exact to="/calendar">Calendar</NavLink>
          </li>
          <li className={HeaderStyles["navigation-tab"]}>
            <NavLink to="/events">Events</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
