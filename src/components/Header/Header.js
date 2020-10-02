import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = ({
  shownDate,
  clickButton
}) => {
  const date = shownDate.date;

  const onClick = (buttonTypes) => {
    const eventInfo = {
      buttonTypes: buttonTypes,
      currentDate: date,
    }

    clickButton(eventInfo);
  }

  return (
    <>
      <header className={styles.Header} >
        <nav>
          <div className={styles.dateMove}>
            <button
              className="prevButton"
              onClick={e => onClick(e.target.className)}>
              {"<"}
            </button>
            <div className={styles.today}>
              <h1>{date}</h1>
            </div>
            <button
              className="nextButton"
              onClick={e => onClick(e.target.className)}>
              {">"}
            </button>
          </div>
          <div className={styles.buttons}>
            <Link to='/'>
              <button className={styles.DailyCalendar}>Daily Calendar</button>
            </Link>
            <Link to='/weeklyCalendar'>
              <button className={styles.WeeklyCalendar}>Weekly Calendar</button>
            </Link>
            <Link to='/event'>
              <button className={styles.AddEvent}>Add Event</button>
            </Link>
            <Link to='/auth'>
              <button className={styles.Login}>Login</button>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
