import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { nextDate, prevDate } from '../../actions';
import { MOVE_DATE, PERIOD_UNIT } from '../../constants/button';
import { getCurrentDate } from '../../utils/getDate';
import styles from "./Header.module.css";

function Header ({
   currentDate,
   onPrevButtonClick,
   onNextButtonClick,
 }) {
  return (
    <header className={styles.Header}>
      <div className={styles.moveDate}>
        <button onClick={() => onPrevButtonClick(currentDate)}>
          {MOVE_DATE.PREV}
        </button>
        <button onClick={() => onNextButtonClick(currentDate)}>
          {MOVE_DATE.NEXT}
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

function mapStateToProps(state) {
  const currentDate = getCurrentDate(state.currentDay);

  return { currentDate };
}

function mapDispatchToProps(dispatch) {
  return {
    onPrevButtonClick: () => dispatch(prevDate()),
    onNextButtonClick: () => dispatch(nextDate()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
