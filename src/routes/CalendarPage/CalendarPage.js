import React from "react";
import Calendar from "./Calendar";
import styles from "./CalendarPage.module.css";

const CalendarPage = ({ 
  getEventByCurrentDate, 
  dateList, 
  handleCalendarType, 
  selectedDate, 
  isDailyCalendar 
}) => {
  return (
    <div className={styles[`page-wrapper`]}>
      <Calendar 
        handleSchedule={getEventByCurrentDate} 
        dateList={dateList} 
        handleCalendarType={handleCalendarType} 
        selectedDate={selectedDate} 
        calendarType={isDailyCalendar} 
      />
    </div>
  );
};

export default CalendarPage;
