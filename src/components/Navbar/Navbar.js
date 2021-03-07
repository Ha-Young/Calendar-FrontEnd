import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

// TODO: Create your own header.
export default function Navbar({ onshowDayCalendar, onshowWeekCalendar }) {
  return (
    <header className={`${styles.header}`}>
      <nav>
        <ul>
          <li
            onClick={() => {
              onshowDayCalendar();
            }}
          >
            <Link to="/calendar/day">Day</Link>
          </li>
          <li
            onClick={() => {
              onshowWeekCalendar();
            }}
          >
            <Link to="/calendar/week">Week</Link>
          </li>
          <li>Events</li>
        </ul>
      </nav>
    </header>
  );
}
