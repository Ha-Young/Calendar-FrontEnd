import React from 'react';
import { Link } from 'react-router-dom';
import { MODE_WEEK, MODE_DAY } from '../../constants/ActionType';
import styles from './ScheduleModeChanger.module.css';

const ScheduleModeChanger = ({ changeMode }) => {
  return (
    <nav className={styles.ScheduleModeChanger}>
      <Link to="/calendar/week" onClick={() => changeMode(MODE_WEEK)}>WEEK</Link>/
      <Link to="/calendar/day" onClick={() => changeMode(MODE_DAY)}>DAY</Link>
    </nav>
  );
};

export default ScheduleModeChanger;
