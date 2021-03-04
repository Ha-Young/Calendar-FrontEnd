import React from 'react';
import { NavLink } from 'react-router-dom';
import { formatDate } from "../../utils/SetDate";
import styles from "./Header.module.scss";

// TODO: Create your own header.
export default function Header ({ selectedDate, setCreateEventMode }) {
  const formattedDate = formatDate(selectedDate, "yyyy-MM-dd-E");
  const [ year, month, dateNumber, day ] = formattedDate.split("-");

  return (
    <header className={styles.Header}>
      <h1>{year}.{month}</h1>
      <ul>
        <li>
          <NavLink to="/schedule" activeClassName={styles.active}>WEEKLY</NavLink>
        </li>
        <li>
          <NavLink to="/" exact="true" activeClassName={styles.active}>DAILY</NavLink>
        </li>
        <li>
          <NavLink to="/events" onClick={setCreateEventMode} activeClassName={styles.active}>New Event</NavLink>
        </li>
      </ul>
    </header>
  );
}
