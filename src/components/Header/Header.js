import React from 'react';
import ModeButtonContainer from '../../containers/ModeButtonContainer';
import PagerContainer from '../../containers/PagerContainer';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.Header}>
      <PagerContainer />
      <ModeButtonContainer />
    </header>
  );
}
