import React from "react";
import styles from "./CalendarPage.module.css";
import CalendarHeader from "./CalendarHeader";
import CalendarSideBar from "./CalendarSideBar";
import ScheduleBar from "../../components/ScheduleBar/ScheduleBar";
import { hours } from "../../utils/date";

const CalendarPage = ({ 
  getEventByCurrentDate, 
  dateList, 
  handleCalendarType, 
  selectedDate, 
  isDailyCalendar,
  onLoadMore,
}) => {
  const checkNeedLoad = (dates) => {
    for (const date of dates) {
      if (getEventByCurrentDate(date).length === 0) {
        return onLoadMore(dates);
      }
    }
  };

  return (
    <div className={styles[`page-wrapper`]}>
      <div className={styles.wrapper}>
        <CalendarHeader
          checkNeedLoad={checkNeedLoad}
          headerInfo={dateList} 
          onClick={handleCalendarType} 
          selectedDate={selectedDate} 
          isDailyCalendar={isDailyCalendar} 
        />
        <div className={styles.content}>
          <CalendarSideBar />
          {dateList?.map((date, index) => (
            <ScheduleBar 
              key={index} 
              schedules={getEventByCurrentDate(date)} 
              dayLength={hours} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
