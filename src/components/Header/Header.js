import React from "react";
import { Link } from "react-router-dom";
import { authService } from "../../utils/firebase";
import { FaRegCalendarCheck } from "react-icons/fa";
import styles from "./Header.module.css";
import ViewSelector from "../ViewSelector/ViewSelector";
import Button from "./Button";

export default function Header ({ changeView, userName }) {
  const handleLogOutButton = () => {
    authService.signOut();
  };

  return (
    <header className={styles.Header}>
      <nav>
        <div className={styles.userLogin}>
          <h2>{userName}</h2>
          <Button
            title="Log out"
            onClick={handleLogOutButton}
          />
        </div>
        <div className={styles.calendarTitle}>
          <FaRegCalendarCheck size="7rem" />
          <h1>CALENDAR</h1>
        </div>
        <ViewSelector changeView={changeView} />
        <Link to="/events/new">
          <Button title="Create Event" />
        </Link>
      </nav>
    </header>
  );
}
