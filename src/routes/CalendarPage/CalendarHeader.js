import React from "react";
import styles from "./CalendarPage.module.css";
import { addDays, subDays } from "date-fns";
import { setCalendarDate } from "../../utils/date";

const CalendarHeader = ({ 
  headerInfo, 
  onClick, 
  selectedDate, 
  isDailyCalendar, 
  checkNeedLoad,
}) => {
  const checkNeedLoadByCalendarType = (date) => {
    if (isDailyCalendar) {
      checkNeedLoad(date.daily);
    } else {
      checkNeedLoad(date.weekly);
    }
  };
  
  const handlePrevButton = () => {
    const newCalendarDate = setCalendarDate(subDays, isDailyCalendar, selectedDate);
    checkNeedLoadByCalendarType(newCalendarDate);

    onClick({
      ...newCalendarDate,
    });
  };

  const handleNextButton = () => {
    const newCalendarDate = setCalendarDate(addDays, isDailyCalendar, selectedDate);
    checkNeedLoadByCalendarType(newCalendarDate);

    onClick({
      ...newCalendarDate,
    });
  };

  return (
    <>
      <div className={styles.navigation}>
        {headerInfo?.map((info) => (
          <div key={info} className={styles.info}>{info}</div>
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
