import React from "react";
import PropTypes from "prop-types";
import DailyCalender from "./DailyCalendar";
import styles from "./WeeklyCalendar.module.scss";

function WeeklyCalender({ currentWeek, events }) {
  return (
    <div className={styles.WeeklyCalendar}>
      {currentWeek.map((currentDate, index) => {
        return (
          <DailyCalender
            key={index}
            currentDate={currentDate}
            events={events}
          />
        );
      })}
    </div>
  );
}

WeeklyCalender.propTypes = {
  currentWeek: PropTypes.arrayOf(PropTypes.string).isRequired,
  events: PropTypes.shape({
    eventDate: PropTypes.string,
    eventDescription: PropTypes.string,
    eventEndTime: PropTypes.string,
    eventStartTime: PropTypes.string,
    eventId: PropTypes.number,
    eventTitle: PropTypes.string,
  }),
};

export default WeeklyCalender;
