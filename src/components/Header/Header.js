import React from "react";
import ScheduleHeader from "../ScheduleHeader/ScheduleHeader";
import Navigation from "../Navigation/Navigation";

const Header = function ({ dateObject }) {
  return (
    <header>
      <Navigation />
      <ScheduleHeader dateObject={dateObject} />
    </header>
  );
};

export default Header;
