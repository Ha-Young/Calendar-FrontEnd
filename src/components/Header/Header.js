import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

import { auth } from '../../firebase';

const Header = ({ isLoggedIn }) => {
  return (
    <header className={styles.Header}>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/calendar'>Calendar</Link>
          </li>
          <li>
            <Link to='/events/new'>New Event</Link>
          </li>
          {isLoggedIn ? (
            <li onClick={() => auth.signOut()}>Sign Out</li>
          ) : (
            <li>
              <Link to='/signin'>Sign In</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
