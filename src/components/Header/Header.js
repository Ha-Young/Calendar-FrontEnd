import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from "../../components/Shared/Button";
import { formatDate } from "../../utils/SetDate";
import { logoutWithGoogleAccount } from "../../api/googleLogin";
import styles from "./Header.module.scss";

const today = new Date();

// TODO: Create your own header.
export default function Header ({ setUserId, selectedDate, setSelectedDate, setCreateEventMode }) {
  const formattedDate = formatDate(selectedDate, "yyyy-MM-dd-E");
  const [ year, month, dateNumber, day ] = formattedDate.split("-");

  const logOut = async () => {
    await logoutWithGoogleAccount();
    setUserId("", false);
  }

  return (
    <header className={styles.Header}>
      <h1 onClick={() => setSelectedDate(today)}>{year}.{month}</h1>
      <ul>
        <li>
          <NavLink to="/calendar" exact activeClassName={styles.active}>WEEKLY</NavLink>
        </li>
        <li>
          <NavLink to="/daily" activeClassName={styles.active}>DAILY</NavLink>
        </li>
        <li>
          <NavLink to="/events/new" onClick={setCreateEventMode} activeClassName={styles.active} exact>New Event</NavLink>
        </li>
      </ul>
      <Link to="/login" onClick={logOut}>
        <Button type="button">Logout</Button>
      </Link>
    </header>
  );
}
