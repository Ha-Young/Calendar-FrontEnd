import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { formatDate } from "../../utils/SetDate";
import styles from "./Header.module.scss";

const today = new Date();

// TODO: Create your own header.
export default function Header ({ selectedDate, setSelectedDate, setCreateEventMode }) {
  const formattedDate = formatDate(selectedDate, "yyyy-MM-dd-E");
  const [ year, month, dateNumber, day ] = formattedDate.split("-");
  const { pathname } = useLocation();

  return (
    <header className={styles.Header}>
      <h1 onClick={() => setSelectedDate(today)}>{year}.{month}</h1>
      <ul>
        <li>
          <NavLink to="/" exact activeClassName={styles.active}>WEEKLY</NavLink>
        </li>
        <li>
          <NavLink to="/daily" activeClassName={styles.active}>DAILY</NavLink>
        </li>
        <li>
          <NavLink to="/events/new" onClick={setCreateEventMode} activeClassName={styles.active} exact>New Event</NavLink>
        </li>
      </ul>
    </header>
  );
}
