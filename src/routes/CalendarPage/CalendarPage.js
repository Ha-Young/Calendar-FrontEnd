import React, { useEffect } from "react";
import { updateEventData } from "../../api/index";
import Board from "../../components/Board/Board";
import styles from "./CalendarPage.module.css";

const CalendarPage = ({ onLoad, eventList, dateList }) => { // toglebutton으로 바꾸기..
  useEffect(() => {
    onLoad();
  }, []);
  return ( // 감싸줘야 하나..?, value이용해서 해야 하나..? usecallback 이용
    <div className={styles.wrapper}>
      <Board content={eventList} headerData={dateList} />
    </div>
  );
};

export default CalendarPage;
