import React from "react";
import CalendarHeader from "./CalendarHeader";
import CalendarSideBar from "./CalendarSideBar";
import ScheduleBar from "../ScheduleBar/ScheduleBar";
import styles from "./Calendar.module.css";
import { hours } from "../../utils/date";

const Calendar = ({ dateList, handleSchedule }) => {
  return (
    <div className={styles.wrapper}>
      <CalendarHeader nav={dateList} />
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
