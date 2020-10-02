import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import Button from '../Button/Button';
import { connect } from 'react-redux';
import { changeToDailyMode, changeToWeeklyMode } from '../../actions';

function Header( {...props} ) {
  
  function GetYearAndMonth() {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;

    return (
      <div className={styles.Year}>{month}.{year}</div>
    );
  }

  function GetDate() {
    const today = new Date();
    //const year = today.getFullYear();
    //const month = today.getMonth() + 1;
    const date = today.getDate();
    //const day = today.getDay();

    return (
      <div className={styles.Date}>{date}</div>
    );
  }

  return (
    <header className={styles.Header}>
      <Button />
      <GetYearAndMonth />
      <GetDate />
      <nav className={styles.Nav}>
        <Link to='/'onClick={props.changeToDailyMode}>DAY</Link>
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
    changeMode: state.updateDateReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeToDailyMode: () => dispatch(changeToDailyMode()),
    changeToWeeklyMode: () => dispatch(changeToWeeklyMode())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
