import React from 'react';
import { Link } from 'react-router-dom';
import { MOVE_DATE_BUTTON, PERIOD_UNIT } from '../../constants/common';
import styles from "./Header.module.css";
import PropTypes from "prop-types";

function Header ({
   currentDate,
   onPrevButtonClick,
   onNextButtonClick,
 }) {
  return (
    <header className={styles.Header}>
      <div className={styles.moveDate}>
        <button onClick={() => onPrevButtonClick(currentDate)}>
          {MOVE_DATE_BUTTON.PREV}
        </button>
        <button onClick={() => onNextButtonClick(currentDate)}>
          {MOVE_DATE_BUTTON.NEXT}
        </button>
      </div>
      <h2 className={styles.date}>{currentDate}</h2>
      <nav>
        <Link to='/'>
          <button>{PERIOD_UNIT.DAY}</button>
        </Link>
        <Link to='/calendar/week'>
          <button>{PERIOD_UNIT.WEEK}</button>
        </Link>
      </nav>
    </header>
  );
}

export default Header;

Header.propTypes = {
  currentDate: PropTypes.string.isRequired,
  onPrevButtonClick: PropTypes.func.isRequired,
  onNextButtonClick: PropTypes.func.isRequired,
};
