import React from 'react';
import { Link } from 'react-router-dom';
import { viewMode } from "../../constants/viewMode";

// TODO: Create your own header.

const Header = ({ onClickButton }) => {
  const handleClickDayButton = () => onClickButton(viewMode.DAILYMODE.isDaily);
  const handleClickWeekButton = () => onClickButton(viewMode.WEEKLYMODE.isDaily);

  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Calendar</Link></li>
          <li><Link to="/events/new">New Event</Link></li>
        </ul>
        <button value="day" onClick={handleClickDayButton}>day</button>
        <button value="week" onClick={handleClickWeekButton}>week</button>
      </nav>
    </header>
  );
};

export default Header;
