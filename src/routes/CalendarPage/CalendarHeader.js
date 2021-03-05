import React from "react";
import styles from "./CalendarPage.module.css";
import { addDays, subDays } from "date-fns";
import { setCalendarDate } from "../../utils/date";

const CalendarHeader = ({ 
  sideBar, 
  onClick, 
  selectedDate, 
  calendarType, 
}) => {
  const handlePrevButton = () => {
    const newCalendarDate = setCalendarDate(subDays, calendarType, selectedDate);
    onClick({
      ...newCalendarDate,
    });
  };

  const handleNextButton = () => {
    const newCalendarDate = setCalendarDate(addDays, calendarType, selectedDate);

    onClick({
      ...newCalendarDate,
    });
  };

  return (
    <>
      <div className={styles.navigation}>
        {sideBar?.map((date) => (
          <div key={date} className={styles.date}>{date}</div>
        ))}
      </div>
      <div className={styles.buttons}>
        <button value="prev" onClick={handlePrevButton}>prev</button>
        <button value="next" onClick={handleNextButton}>next</button>
      </div>
    </>

  );
};

export default CalendarHeader;
