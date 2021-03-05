import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Header.module.css"
import CalenderModeSelector from "../CalenderModeSelector";
import Button from "../Button";
import DateControlNav from "../DateControlNav";

export default function Header ({
  currentDate,
  calendarMode,
  changeCalendarMode,
  moveToPrevDate,
  moveToNextDate,
  moveToToday,
}) {
  return (
    <header className={styles.Header}>
      <div className={styles.NavBar}>
        <Link to="/events/new">
          <Button title="Add new event!"/>
        </Link>

        <DateControlNav
          currentDate={currentDate}
          calendarMode={calendarMode}
          moveToPrevDate={moveToPrevDate}
          moveToNextDate={moveToNextDate}
          moveToToday={moveToToday}
        />
      </div>

      <div className={styles.Selector}>
        <CalenderModeSelector
          changeCalendarMode={changeCalendarMode}
        />
      </div>
    </header>
  );
}
