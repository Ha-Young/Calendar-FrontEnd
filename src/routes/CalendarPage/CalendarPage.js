import React from "react";
import styles from "./CalendarPage.module.css";
import PropTypes from "prop-types";
import CalendarHeader from "./CalendarHeader";
import CalendarSideBar from "./CalendarSideBar";
import ScheduleBar from "../../components/ScheduleBar";
import { hours } from "../../utils/date";

const CalendarPage = ({
  getEventByCurrentDate,
  dateList,
  handleCalendarType,
  selectedDate,
  isDailyCalendar,
  loadMoreEventData,
}) => {
  const checkNeedLoad = (dates) => {
    for (const date of dates) {
      if (getEventByCurrentDate(date).length === 0) {
        return loadMoreEventData(dates);
      }
    }
  };

  return (
    <div className={styles[`page-wrapper`]}>
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
  );
};

export default CalendarPage;

CalendarPage.propTypes = {
  getEventByCurrentDate: PropTypes.func.isRequired,
  dateList: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ),
  handleCalendarType: PropTypes.func.isRequired,
  selectedDate: PropTypes.instanceOf(Date),
  isDailyCalendar: PropTypes.bool.isRequired,
  loadMoreEventData: PropTypes.func.isRequired,
};
