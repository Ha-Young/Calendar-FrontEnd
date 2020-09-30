import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ScheduleModeChanger.module.css';
import { MODE_MONTH, MODE_WEEK, MODE_DAY } from '../../constants/ActionType';

const ScheduleModeChanger = ({ onChangeMode }) => {
  return (
    <nav className={styles.ScheduleModeChanger}>
      <Link to="/calendar/week" onClick={() => onChangeMode(MODE_WEEK)}>WEEK</Link>
      <Link to="/calendar/day" onClick={() => onChangeMode(MODE_DAY)}>DAY</Link>
    </nav>
  );
};

export default ScheduleModeChanger;