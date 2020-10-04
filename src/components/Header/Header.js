import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import Button from '../Button/Button';
import { connect } from 'react-redux';
import { changeToDailyMode, changeToWeeklyMode } from '../../actions';

function Header( { updateDateReducer, changeToDailyMode, changeToWeeklyMode } ) {
  const updateDate = updateDateReducer;

  function GetYearAndMonth() {
    const year = new Date().getFullYear();

    return (
      <>
        {updateDate.shouldLoadDailyPage ?
          <div className={styles.Year}>{updateDate.monthDaily + 1}.{year}</div> :
          <div className={styles.Year}>{updateDate.monthWeekly+ 1}.{year}</div>
        }
      </>
    );
  }

  return (
    <header className={styles.Header}>
      <Button />
      <GetYearAndMonth />
      <div className={styles.Chalender}>Chalender</div>
      <nav className={styles.Nav}>
        <Link to='/' onClick={changeToDailyMode}>DAY</Link>
        <span> | </span>
        <Link to='/week' onClick={changeToWeeklyMode}>WEEK</Link>
        <span> | </span>
        <Link to='/event/new'>ADD EVENT</Link>
      </nav>
    </header>
  );
}

const mapStateToProps = state => {
  return {
    updateDateReducer: state.updateDateReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeToDailyMode: () => dispatch(changeToDailyMode()),
    changeToWeeklyMode: () => dispatch(changeToWeeklyMode())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
