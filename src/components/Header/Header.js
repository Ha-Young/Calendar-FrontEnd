import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import styles from './Header.module.scss';

import { auth } from '../../firebase';

const Header = ({ currentUser }) => {
  return (
    <header className={styles.Header}>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/event'>Event</Link>
          </li>
          {currentUser ? (
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

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

export default connect(mapStateToProps, null)(Header);
