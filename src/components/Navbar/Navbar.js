import React from "react";
import styles from "./Navbar.module.css";
import { Link, useHistory } from "react-router-dom";

// TODO: Create your own header.
export default function Navbar({ onChangeDayMode, onChangeWeekMode }) {
  let history = useHistory();

  return (
    <header className={`${styles.header}`}>
      <nav>
        <ul>
          <li
            onClick={() => {
              onChangeDayMode();
            }}
          >
            <Link to="/Calendar/Day">Day</Link>
          </li>
          <li
            onClick={() => {
              onChangeWeekMode();
            }}
          >
            <Link to="/Calendar/Week">Week</Link>
          </li>
          <li>Events</li>
        </ul>
      </nav>
    </header>
  );
}
