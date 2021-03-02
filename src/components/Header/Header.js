import React from "react";
import styles from "./Header.module.css";
import ScheduleHeader from "./ScheduleHeader/ScheduleHeader";
import Navigation from "./Navigation/Navigation";

//이렇게 건내주면 header의 재사용성이 떨어지지않을까?
//depth를 생각해서 container를 사용하라 하셨었는데
//재사용성을 위해서라면 ScheduleHeader를 Container로 감싸주면
//Header를 독립적으로 사용할수 있지않을까?
//지금으로썬 Header가 본인이 쓰지도 않는 prop을 너무 많이 받는다.
//Worth to think about it
const Header = function ({
  date,
  updateLastWeek,
  updateNextWeek
}) {
  return (
    <header className={styles["header"]}>
      <Navigation />
      <ScheduleHeader
        date={date}
        onPreButtonClick={updateLastWeek}
        onNextButtonClick={updateNextWeek}
      />
    </header>
  );
};

export default Header;
