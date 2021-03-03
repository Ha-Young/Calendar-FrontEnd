import React from "react";
import styles from "./SideBar.module.css";
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className={styles.wrapper}>
      <ul>
        <li><Link to="/">Calendar</Link></li>
        <li><Link to="/events/new">New Event</Link></li>
      </ul>
    </div>
  );
};

export default SideBar;
