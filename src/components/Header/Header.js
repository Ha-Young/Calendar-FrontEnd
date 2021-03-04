import React from 'react';
import { viewMode } from "../../constants/viewMode";
import { generateTitleDate } from "../../utils/date";
import { addDays, subDays } from "date-fns";
import { setCalendarDate } from "../../utils/date";
import styles from "./Header.module.css";

// TODO: Create your own header.

const Header = ({ onClickButton, onToggle, currentDate, selectedDate, type }) => {
  const handleClickDayButton = () => onClickButton(viewMode.DAILYMODE.isDaily);
  const handleClickWeekButton = () => onClickButton(viewMode.WEEKLYMODE.isDaily);

  const handlePrevButton = () => { // 나누는게 나은가..? usecallback 사용하기
    const newCalendarDate = setCalendarDate(subDays, type, selectedDate);

    onToggle({
      ...newCalendarDate,
    });
  };

  const handleNextButton = () => {
    const newCalendarDate = setCalendarDate(addDays, type, selectedDate);

    onToggle({
      ...newCalendarDate,
    });
  };

  const titleDate = generateTitleDate(currentDate); // week일때 안움직이게 currentDate로 유지..
  
  return (
    <div className={styles.navigation}>
      {titleDate}
      <button value="day" onClick={handleClickDayButton}>day</button>
      <button value="week" onClick={handleClickWeekButton}>week</button>
      <button value="prev" onClick={handlePrevButton}>prev</button>
      <button value="next" onClick={handleNextButton}>next</button>
    </div>
  );
};

export default Header;
