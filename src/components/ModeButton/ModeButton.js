import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ModeButton.module.css';
import { MODE_MONTH, MODE_WEEK, MODE_DAY } from '../../constants/ActionType';

const ModeButton = ({ onChangeMode }) => {
  return (
    <nav className={styles.ModeButton}>
      <Link to="/calendar/month" onClick={() => onChangeMode(MODE_MONTH)}>MONTH</Link>
      <Link to="/calendar/week" onClick={() => onChangeMode(MODE_WEEK)}>WEEK</Link>
      <Link to="/calendar/day" onClick={() => onChangeMode(MODE_DAY)}>DAY</Link>
    </nav>
  );
};

export default ModeButton;