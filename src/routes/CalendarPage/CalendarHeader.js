import React from "react";
import styles from "./CalendarPage.module.css";
import { addDays, subDays } from "date-fns";
import { setCalendarDate } from "../../utils/date";

const CalendarHeader = ({ 
  sideBar, 
  onToggle, 
  selectedDate, 
  calendarType, 
  children 
}) => {
  const handlePrevButton = () => {
    const newCalendarDate = setCalendarDate(subDays, calendarType, selectedDate);
    onToggle({
      ...newCalendarDate,
    });
  };

  const handleNextButton = () => {
    const newCalendarDate = setCalendarDate(addDays, calendarType, selectedDate);

    onToggle({
      ...newCalendarDate,
    });
  };
  
  return (
    <div className={styles.navigation}>
      <button value="prev" onClick={handlePrevButton}>prev</button>
      <button value="next" onClick={handleNextButton}>next</button>
      {sideBar?.map((date) => (
        <div key={date} className={styles.date}>{date}</div>
      ))}
      {children}
    </div>
  );
};

export default CalendarHeader;
