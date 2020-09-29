import React from 'react';
import styles from './Header.module.css';

import TodayButton from '../TodayButton/TodayButton';
import Pager from '../Pager/Pager';
import ModeButton from '../ModeButton/ModeButton';
import ModeButtonContainer from '../../containers/ModeButtonContainer';
import DateInfoContainer from '../../containers/DateInfoContainer';

// TODO: Create your own header.
export default function Header() {
  return (
    <header className={styles.Header}>
      <TodayButton />
      <Pager />
      <DateInfoContainer />
      <ModeButtonContainer />
    </header>
  );
}
