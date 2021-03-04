import React, { useEffect } from "react";
import Board from "../../components/Board/Board";
import styles from "./CalendarPage.module.css";

const CalendarPage = ({ onLoad, getEventByCurrentDate, dateList }) => { // toglebutton으로 바꾸기..
  // useEffect(() => {
  //   onLoad();
  // }, []);
  return (
    <div className={styles.wrapper}>
      <Board getEventByCurrentDate={getEventByCurrentDate} headerData={dateList} />
    </div>
  );
};

export default CalendarPage;
