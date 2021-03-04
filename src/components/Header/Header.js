import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

// TODO: Create your own header.
export default function Header () {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Daily</Link></li>
          <li><Link to="/weekly">Weekly</Link></li>
        </ul>
      </nav>
    </header>
  );
}
