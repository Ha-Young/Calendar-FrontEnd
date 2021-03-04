import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import {
  FaCalendarDay,
  FaCalendarWeek,
  FaCalendarPlus,
  FaCalendar,
  FaCalendarCheck
} from "react-icons/fa";

import DateSelector from "../../containers/DateSelector";
import styles from "./Header.module.css";

function Header ({ isDaily, toggleDay, moveToToday }) {
  function handleToggleClick() {
    toggleDay();
  }

  function handleTodayClick() {
    moveToToday();
  }

  return (
    <header className={styles.header}>
      <div className={styles.buttonContainer}>
        <Switch>
          <Route path="/calendar">
            <button onClick={handleToggleClick}>
              {isDaily
                ? <FaCalendarWeek size="4em" />
                : <FaCalendarDay size="4em" />
              }
            </button>
            <nav>
              <Link to="/events">
                <button>
                  <FaCalendarPlus size="4em" />
                </button>
              </Link>
            </nav>
            <button onClick={handleTodayClick}>
              <FaCalendarCheck size="4em" />
            </button>
          </Route>
          <Route path="/events">
            <nav>
              <Link to="/calendar">
                <button>
                  <FaCalendar size="4em" />
                </button>
              </Link>
            </nav>
          </Route>
        </Switch>
      </div>
      <DateSelector />
    </header>
  );
}

export default Header;
