import React from "react";
import { Link } from "react-router-dom";
import { viewMode } from "../../constants/viewMode";
import { generateTitleDate } from "../../utils/date";

import styles from "./Header.module.css";

// TODO: Create your own header.

const Header = ({ onClickButton, currentDate }) => {
  const handleClickDayButton = () => onClickButton(viewMode.DAILYMODE.isDaily);
  const handleClickWeekButton = () => onClickButton(viewMode.WEEKLYMODE.isDaily);

  const titleDate = generateTitleDate(currentDate);
  
  return (
    <div className={styles.navigation}>
      {titleDate}
      <Link to="/calendar">
        <button value="day" onClick={handleClickDayButton}>day</button>
        <button value="week" onClick={handleClickWeekButton}>week</button>
      </Link>
    </div>
  );
};

export default Header;
