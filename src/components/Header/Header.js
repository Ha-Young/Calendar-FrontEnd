import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../publicComponent/Icon/Icon'
import ToggleIcon from './ToggleIcon/ToggleIcon';
import './Header.scss';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { changeCalendarMode } from '../../actions';

const toggleIconClassName = 'header__toggleIcon';

// state가 있는 component
function Header () {
  const calendarMode = useSelector(state => state.calendarMode, shallowEqual);
  const dispatchReducers = useDispatch();

  function selectToggleIcon() {
    const returnObject = {};
    switch (calendarMode) {
      case ('daily'):
        returnObject.className = 'fas fa-sun ' + toggleIconClassName;
        returnObject.textContent = 'daily'
        break;
      case ('weekly'):
        returnObject.className = 'fas fa-calendar-week ' + toggleIconClassName;
        returnObject.textContent = 'weekly'
        break;
    }

    return returnObject;
  }
  const toggleIcon = selectToggleIcon();

  function handleToggleIconClick() {
    if (calendarMode === 'daily') {
      dispatchReducers(changeCalendarMode('weekly'));
      return;
    }

    dispatchReducers(changeCalendarMode('daily'));
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
