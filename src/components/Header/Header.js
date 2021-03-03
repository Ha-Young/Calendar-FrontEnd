import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { MOVE_DATE, PERIOD_UNIT } from '../../constants/button';
import { getCurrentDate } from '../../utils/getDate';
import styles from "./Header.module.css";

// TODO: Create your own header.
function Header ({ currentDate }) {
  return (
    <header className={styles.Header}>
      <div className={styles.date}>
        <button>{MOVE_DATE.PRE}</button>
        <button>{MOVE_DATE.NEXT}</button>
        <h2>{currentDate}</h2>
      </div>
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
  const currentDate = getCurrentDate(state.current)

  return { currentDate };
}

export default connect(mapStateToProps, null)(Header);
