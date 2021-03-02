import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

// TODO: Create your own header.
export default function Header() {
  return (
    <header className={`${styles.header}`}>
      <nav>
        <ul>
          <li>
            <Link to="/Day">Day</Link>
          </li>
          <li>
            <Link to="/Week">Week</Link>
          </li>
          <li>
            <Link to="/Month">Month</Link>
          </li>
          <li>
            <Link to="/Event">Event</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
