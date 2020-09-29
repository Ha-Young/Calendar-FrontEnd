import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import ToggleButton from './ToggleButton';
import GetDate from './GetDate';
import { FcNext, FcPrevious } from 'react-icons/fc';

export default function Header () {
  return (
    <header style={{width: '100%'}}>
      <ToggleButton />
      <GetDate />
      <div className={styles.nav_btn_wrap}>

      <button className={styles.prev_btn}><FcPrevious /></button>
      <button className={styles.next_btn}><FcNext /></button>
      </div>
    </header>
  );
}
