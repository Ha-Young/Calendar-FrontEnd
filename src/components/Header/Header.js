import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

// TODO: Create your own header.
export default function Header () {
  return (
    <header className={styles.header}>
      <nav>
        <div><Link to="/">Daily</Link></div>
        <div><Link to="/weekly">Weekly</Link></div>
      </nav>
    </header>
  );
}
