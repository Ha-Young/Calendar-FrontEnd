import React from "react";
import Calendar from "../../components/Calendar/Calendar";
import styles from "./CalendarPage.module.css";

const CalendarPage = ({ getEventByCurrentDate, dateList }) => { // toglebutton으로 바꾸기..
  return (
    <div className={styles.wrapper}>
      <Calendar handleSchedule={getEventByCurrentDate} dateList={dateList} />
    </div>
  );
};

export default CalendarPage;
