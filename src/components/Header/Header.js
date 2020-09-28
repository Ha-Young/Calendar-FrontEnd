import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css'

export default function Header () {
  return (
    <header>
      <nav>
        <div>
          <div><Link to='/'>Calendar</Link></div>
          <div><Link to='/event'>Add Event</Link></div>
        </div>
        {/* <button className={styles.login_btn}><Link to='/login'>LogIn</Link></button> */}
      </nav>
    </header>
  );
}
