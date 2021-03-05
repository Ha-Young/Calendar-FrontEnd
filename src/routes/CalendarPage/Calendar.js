import React from "react";
import CalendarHeader from "./CalendarHeader";
import CalendarSideBar from "./CalendarSideBar";
import ScheduleBar from "../../components/ScheduleBar/ScheduleBar";
import styles from "./CalendarPage.module.css";
import { hours } from "../../utils/date";

const Calendar = ({ 
  dateList, 
  handleSchedule, 
  handleCalendarType, 
  selectedDate, 
  calendarType 
}) => {
  return (
    <div className={styles.wrapper}>
      <CalendarHeader 
        sideBar={dateList} 
        onToggle={handleCalendarType} 
        selectedDate={selectedDate} 
        calendarType={calendarType} 
      />
      <div className={styles.content}>
        <CalendarSideBar />
        {dateList?.map((date, index) => (
          <ScheduleBar key={index} schedules={handleSchedule(date)} dayLength={hours} />
        ))}
      </div>
    </div>
  );
};

export default Calendar;
