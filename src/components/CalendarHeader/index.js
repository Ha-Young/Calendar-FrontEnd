import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./CalendarHeader.module.css"
import CalendarModeSelector from "../CalendarModeSelector";
import Button from "../Button";
import DateControlNav from "../DateControlNav";
import { BUTTON_PLACEHOLDER } from "../../utils/constants";
import moment from "moment";

export default function CalendarPageHeader({
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
          <Button title={BUTTON_PLACEHOLDER.SUBMIT}/>
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
        <CalendarModeSelector
          changeCalendarMode={changeCalendarMode}
        />
      </div>
    </header>
  );
}
