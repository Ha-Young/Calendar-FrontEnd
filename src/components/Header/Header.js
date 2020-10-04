import React from 'react';
import ModeButtonContainer from '../../containers/ModeButtonContainer';
import PagerContainer from '../../containers/PagerContainer';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.Header}>
      <PagerContainer />
      <ModeButtonContainer />
    </header>
  );
};

export default Header;
