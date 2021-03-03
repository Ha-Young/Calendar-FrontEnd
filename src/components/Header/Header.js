import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

// TODO: Create your own header.
export default function Header () {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Menu 1</Link></li>
          <li><Link to="/event">Event</Link></li>
        </ul>
      </nav>
    </header>
  );
}
