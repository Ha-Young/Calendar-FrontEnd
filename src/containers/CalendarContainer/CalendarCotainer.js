import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import DailyCalendar from "../../components/Calendar/DailyCalendar";
import WeeklyCalendar from "../../components/Calendar/WeeklyCalendar";
import getCurrentWeek from "../../utils/getCurrentWeek";
import styles from "./CalendarContainer.module.scss";

function CalendarContainer({ dateUnit, currentDate, events }) {
  return (
    <div className={styles.CalendarContainer}>
      {dateUnit === "일" ? (
        <DailyCalendar currentDate={currentDate} events={events} />
      ) : (
        <WeeklyCalendar
          currentWeek={getCurrentWeek(currentDate)}
          events={events}
        />
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    dateUnit: state.dateUnit,
    currentDate: state.currentDate,
    events: state.events.byId,
  };
};

CalendarContainer.propTypes = {
  dateUnit: PropTypes.string.isRequired,
  currentDate: PropTypes.string.isRequired,
  events: PropTypes.shape({
    eventDate: PropTypes.string,
    eventDescription: PropTypes.string,
    eventEndTime: PropTypes.string,
    eventStartTime: PropTypes.string,
    eventId: PropTypes.number,
    eventTitle: PropTypes.string,
  }),
};

export default connect(mapStateToProps)(CalendarContainer);
