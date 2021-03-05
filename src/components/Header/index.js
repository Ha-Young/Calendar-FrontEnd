import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Header.module.css"
import CalenderModeSelector from "../CalenderModeSelector";
import Button from "../Button";
import DateControlNav from "../DateControlNav"

export default function Header ({
  currentDate,
  calendarMode,
  changeCalendarMode,
  moveToPrevDate,
  moveToNextDate,
}) {
  return (
    <header className={styles.Header}>
      <div className={styles.NavBar}>
        <Link to="/events/new">
          <Button title="새로운 이벤트"/>
        </Link>

        <DateControlNav
          currentDate={currentDate}
          calendarMode={calendarMode}
          moveToPrevDate={moveToPrevDate}
          moveToNextDate={moveToNextDate}
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
