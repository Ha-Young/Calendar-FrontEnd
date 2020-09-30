import React from "react";
import { Link } from "react-router-dom";
import SelectView from "../SelectView/SelectView";
import EventButton from "./EventButton";
import styles from "./Header.module.css";

export default function Header ({ changeWeeklyView }) {
  return (
    <header className={styles.Header}>
      <nav>
        <h1>CALENDAR</h1>
        <SelectView
          changeWeeklyView={changeWeeklyView}
        />
        <Link to="/events/new">
          <EventButton />
        </Link>
      </nav>
    </header>
  );
}
