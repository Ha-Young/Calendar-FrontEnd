import React from "react";
import styles from "./Header.module.css";
import ScheduleHeader from "../../containers/ScheduleHeader";
import Navigation from "./Navigation/Navigation";

const Header = function ({ isSchedule }) {
  return (
    <header className={styles["header"]}>
      <Navigation />
      {isSchedule && (<ScheduleHeader />)}
    </header>
  );
};

export default Header;
