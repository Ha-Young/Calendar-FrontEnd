import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../publicComponent/Icon/Icon'
import ToggleIcon from './ToggleIcon/ToggleIcon';
import './Header.scss';
import { DAILY_MODE, WEEKLY_MODE } from '../../constants/dateFormats';

const TOGGLEICON_CLASSNAME = 'header__toggleIcon';

// state가 있는 component
function Header ({ calendarMode, changeCalendarMode }) {
  function selectToggleIcon() {
    const returnObject = {};
    switch (calendarMode) {
      case (DAILY_MODE):
        returnObject.className = 'fas fa-sun ' + TOGGLEICON_CLASSNAME;
        returnObject.textContent = DAILY_MODE
        break;
      case (WEEKLY_MODE):
        returnObject.className = 'fas fa-calendar-week ' + TOGGLEICON_CLASSNAME;
        returnObject.textContent = WEEKLY_MODE
        break;
    }

    return returnObject;
  }
  const toggleIcon = selectToggleIcon();

  function handleToggleIconClick() {
    if (calendarMode === DAILY_MODE) {
      changeCalendarMode(WEEKLY_MODE);
      return;
    }

    changeCalendarMode(DAILY_MODE);
  }

  // week일때 hover하면 전환? 이라는 아이콘 뜨고 week와 day가 토글됨, 밑에 week인지 day인지 글자가 보임(그건 hover해도 안바뀜)
  return (
    <header className="header">
      <Link exact to='/'><Icon className={"far fa-calendar-check header__homeIcon"} fontSize={'3em'}></Icon></Link>
      <div className="header__toggleIcon" onClick={handleToggleIconClick}>
        <ToggleIcon iconClassName={toggleIcon.className} textContent={toggleIcon.textContent} fontSize={'2.5em'}></ToggleIcon>
      </div>
      <Link exact to='/event/new'><Icon className={"fas fa-plus"} fontSize={'3em'}></Icon></Link>
    </header>
  );
}

export default Header;
