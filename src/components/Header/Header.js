import React from 'react';
import { NavLink } from 'react-router-dom';
import { CALENDAR } from "../../constants/address";
import { MOVE_DATE_BUTTON, PERIOD_UNIT } from '../../constants/common';
import styles from "./Header.module.css";
import PropTypes from "prop-types";

function Header ({
   currentDate,
   handlePrevButtonClick,
   handleNextButtonClick,
 }) {
  return (
    <header className={styles.Header}>
      <div className={styles.moveDate}>
        <button onClick={handlePrevButtonClick}>
          {MOVE_DATE_BUTTON.PREV}
        </button>
        <button onClick={handleNextButtonClick}>
          {MOVE_DATE_BUTTON.NEXT}
        </button>
      </div>
      <h2 className={styles.date}>{currentDate}</h2>
      <nav>
        <NavLink to={CALENDAR.DAY}>
          <button>{PERIOD_UNIT.DAY}</button>
        </NavLink>
        <NavLink to={CALENDAR.WEEK}>
          <button>{PERIOD_UNIT.WEEK}</button>
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;

Header.propTypes = {
  currentDate: PropTypes.string.isRequired,
  handlePrevButtonClick: PropTypes.func.isRequired,
  handleNextButtonClick: PropTypes.func.isRequired,
};
