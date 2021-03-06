import React from "react";
import styles from "./SideBar.module.css";
import { NavLink } from 'react-router-dom';

const SideBar = () => {  
  return (
    <div className={styles.wrapper}>
      <ul>
        <li><NavLink to="/calendar">Calendar</NavLink></li>
        <li><NavLink to="/events/new">New Event</NavLink></li>
      </ul>
    </div>
  );
};

export default SideBar;
