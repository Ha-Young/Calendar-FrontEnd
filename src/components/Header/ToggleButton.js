import React from 'react';
import { Link } from 'react-router-dom';
import Daily from '../Calendar/Daily';
import styles from './Header.module.css';


export default function ToggleButton() {
  return (
    <div className="btn_wrap">
      <Link to="/">
        <button className={styles.toggle_btn}>Daily</button>
      </Link>
      <Link to="/weekly">
        <button className={styles.toggle_btn}>Weekly</button>
      </Link>
    </div>
  );
}
