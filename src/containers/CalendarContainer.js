import React from 'react';
import { connect } from 'react-redux';
import Calendar from '../components/Calendar/Calendar';

const CalendarContainer = ({ mode, dateObj, weekState }) => {
  return (
    <Calendar mode={mode} dateObj={dateObj} weekState={weekState}/>
  );
};

const mapStateToProps = state => {
  return {
    mode: state.modes.mode,
    dateObj: state.date.calendarDate,
    weekState: state.date.weekState,
  };
};

export default connect(mapStateToProps, null)(CalendarContainer);