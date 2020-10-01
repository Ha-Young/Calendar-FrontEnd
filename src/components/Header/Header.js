import React from "react";
import { Link } from "react-router-dom";
import ViewSelector from "../ViewSelector/ViewSelector";
import Button from "./Button";
import styles from "./Header.module.css";
import { authService } from "../../utils/firebase";

export default function Header ({ changeWeeklyView }) {
  const handleLogOutButton = () => {
    authService.signOut()
      .then() // dispatch 내려줘야 함~~
      .catch();
  };

  return (
    <header className={styles.Header}>
      <nav>
        <div className={styles.userLogin}>
          <h2>User id</h2>
          <Button
            title="Log out"
            onClick={handleLogOutButton} />
        </div>
        <h1>CALENDAR</h1>
        <ViewSelector changeWeeklyView={changeWeeklyView} />
        <Link to="/events/new">
          <Button title="Create Event" />
        </Link>
      </nav>
    </header>
  );
}
