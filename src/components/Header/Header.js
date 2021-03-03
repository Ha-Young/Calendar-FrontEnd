import React from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from "../../utils/SetDate";
import styles from "./Header.module.scss";

// TODO: Create your own header.
export default function Header ({ selectedDate }) {
  const formattedDate = formatDate(selectedDate, "yyyy-MM-dd-E");
  const [ year, month, dateNumber, day ] = formattedDate.split("-");

  return (
    <header className={styles.Header}>
      <h1>{year}.{month}</h1>
      <ul>
        <li><Link to="/schedule">WEEKLY</Link></li>
        <li><Link to="/" exact="true">DAILY</Link></li>
      </ul>
      <Link to="/event"><button type="button">New Event</button></Link>
    </header>
  );
}
