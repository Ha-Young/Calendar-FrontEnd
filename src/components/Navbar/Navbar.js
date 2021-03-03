import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

// TODO: Create your own header.
export default function Navbar({ onChangeDayMode, onChangeWeekMode }) {
  return (
    <header className={`${styles.header}`}>
      <nav>
        <ul>
          <li>
            <Link
              to="/Day"
              onClick={() => {
                onChangeDayMode();
              }}
            >
              Day
            </Link>
          </li>
          <li>
            <Link
              to="/Week"
              onClick={() => {
                onChangeWeekMode();
              }}
            >
              Week
            </Link>
          </li>
          <li>
            <Link to="/Event">Event</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
