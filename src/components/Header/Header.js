import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../publicComponent/Icon/Icon'
import ToggleIcon from './ToggleIcon/ToggleIcon';
import './Header.scss';

// state가 있는 component
export default function Header () {
  const [calendarMode, setCalendarMode] = useState(false);
  // week일때 hover하면 전환? 이라는 아이콘 뜨고 week와 day가 토글됨, 밑에 week인지 day인지 글자가 보임(그건 hover해도 안바뀜)
  return (
    <header className="header">
      <Icon className={"far fa-calendar-check"} fontSize={'2em'}><Link exact to='/'>home</Link></Icon>
      <div className="header__toggleIcon">
        {
          calendarMode 
          ? <ToggleIcon iconClassName={'fas fa-calendar-week'} textContent={'weekly'}></ToggleIcon>
          : <ToggleIcon iconClassName={'fas fa-sun'} textContent={'daily'}></ToggleIcon>
        }
      </div>
      <Icon className={"fas fa-plus"} fontSize={'2em'}><Link exact to='/event/new'>추가버튼!</Link></Icon>
    </header>
  );
}
