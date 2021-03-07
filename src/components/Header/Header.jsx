import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { DAILY_MODE, WEEKLY_MODE } from '../../constants/dateFormats';

import Icon from '../publicComponent/Icon/Icon'
import ToggleIcon from './ToggleIcon/ToggleIcon';

function Header ({ calendarMode, changeCalendarMode }) {
  const toggleIcon = selectToggleIcon();

  function selectToggleIcon() {
    const returnObject = {};
    switch (calendarMode) {
      case (DAILY_MODE):
        returnObject.className = 'fas fa-sun ' + styles.heder__toggleIcon;
        returnObject.textContent = DAILY_MODE
        return returnObject;
      case (WEEKLY_MODE):
        returnObject.className = 'fas fa-calendar-week ' + styles.header__toggleIcon;
        returnObject.textContent = WEEKLY_MODE
        return returnObject;
      default:
        return returnObject;
    }
  }

  function handleToggleIconClick() {
    const isDailyMode = calendarMode === DAILY_MODE;
    changeCalendarMode(isDailyMode ? WEEKLY_MODE : DAILY_MODE);
  }

  return (
    <header className={styles.header}>
      <Link exact to='/'><Icon className={`far fa-calendar-check ${styles.header__homeIcon}`} fontSize='3em' /></Link>
      <div className={styles.header__toggleIcon} onClick={handleToggleIconClick}>
        <ToggleIcon iconClassName={toggleIcon.className} textContent={toggleIcon.textContent} fontSize='2.5em' />
      </div>
      <Link exact to='/event/new'><Icon className={"fas fa-plus"} fontSize='3em' /></Link>
    </header>
  );
}

export default Header;
