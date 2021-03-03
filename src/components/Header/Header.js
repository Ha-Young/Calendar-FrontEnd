import React from "react";
import styles from "./Header.module.css";
import ScheduleHeader from "../../containers/ScheduleHeader";
import Navigation from "./Navigation/Navigation";

//isCalendar같은 state만들어서 header에서 schedule용 header나
//event용 header만들게 하는거 나중에 만들자잉
const Header = function () {
  return (
    <header className={styles["header"]}>
      <Navigation />
      <ScheduleHeader />
    </header>
  );
};

export default Header;
