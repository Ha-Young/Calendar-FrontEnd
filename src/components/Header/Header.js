import React from "react";
import { Link } from "react-router-dom";
import ViewSelector from "../ViewSelector/ViewSelector";
import Button from "./Button";
import styles from "./Header.module.css";
import { authService } from "../../utils/firebase";
import { FaRegCalendarCheck } from "react-icons/fa";

export default function Header ({ changeWeeklyView, userProfile }) {
  const handleLogOutButton = () => {
    authService.signOut();
  };

  return (
    <header className={styles.Header}>
      <nav>
        <div className={styles.userLogin}>
          <h2>{userProfile}</h2>
          <Button
            title="Log out"
            onClick={handleLogOutButton}
          />
        </div>
        <div className={styles.calendarTitle}>
          <FaRegCalendarCheck size="7rem" />
          <h1>CALENDAR</h1>
        </div>
        <ViewSelector changeWeeklyView={changeWeeklyView} />
        <Link to="/events/new">
          <Button title="Create Event" />
        </Link>
      </nav>
    </header>
  );
}
