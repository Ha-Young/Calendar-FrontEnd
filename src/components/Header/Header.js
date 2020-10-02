import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import Button from '../Button/Button';
import { connect } from 'react-redux';
import { changeToDailyMode, changeToWeeklyMode } from '../../actions';

function Header({ ...props }) {
  const updateDate = props.updateDateReducer;

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

  function GetDate() {
    const today = new Date();
    const date = today.getDate();

    return (
      <div className={styles.Chalender}>Chalender</div>
    );
  }

  return (
    <header className={styles.Header}>
      <Button />
      <GetYearAndMonth />
      <GetDate />
      <nav className={styles.Nav}>
        <Link to='/' onClick={props.changeToDailyMode}>DAY</Link>
        <span> | </span>
        <Link to='/week' onClick={props.changeToWeeklyMode}>WEEK</Link>
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
