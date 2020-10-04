import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

export default function Menu({
  clickPrevButton,
  clickNextButton,
  setWeeklyTheme,
  setDailyTheme
}) {

  return (
    <div>
      <div>title</div>
      <Button onClick={clickPrevButton}>Prev</Button>
      <Button onClick={clickNextButton}>Next</Button>
      <Link to='/event/new'>
        <Button>Add New Event</Button>
      </Link>
      <Button onClick={setWeeklyTheme}>Weekly</Button>
      <Button onClick={setDailyTheme}>Daily</Button>
    </div>
  );
}
