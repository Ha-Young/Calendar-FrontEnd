import React from "react";
import { connect } from "react-redux";
import DailyCalendar from "../../components/Calendar/DailyCalendar";
import WeeklyCalendar from "../../components/Calendar/WeeklyCalendar";
import styles from "./CalendarContainer.module.scss";
import getCurrentWeek from "../../utils/getCurrentWeek";

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
    events: state.events,
  };
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CalendarContainer);
