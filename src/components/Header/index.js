import React from "react";
import styles from "./Header.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { viewMode } from "../../constants/viewMode";
import { generateTitleDate } from "../../utils/date";

// TODO: Create your own header.

const Header = ({ onButtonClick, currentDate }) => {
  const handleClickDayButton = () => onButtonClick(viewMode.DAILYMODE.isDaily);
  const handleClickWeekButton = () => onButtonClick(viewMode.WEEKLYMODE.isDaily);

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

Header.propTypes = {
  currentDate: PropTypes.instanceOf(Date),
  onButtonClick: PropTypes.func.isRequired,
};
