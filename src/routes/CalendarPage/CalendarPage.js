import React, { useEffect } from "react";
import Board from "../../components/Board/Board";
import styles from "./CalendarPage.module.css";

const CalendarPage = ({ onLoad, getEventByCurrentDate, dateList }) => { // toglebutton으로 바꾸기..
  useEffect(() => {
    onLoad();
  }, []);
  return ( // 감싸줘야 하나..?, value이용해서 해야 하나..? usecallback 이용
    <div className={styles.wrapper}>
      <Board getEventByCurrentDate={getEventByCurrentDate} headerData={dateList} />
    </div>
  );
};

export default CalendarPage;
