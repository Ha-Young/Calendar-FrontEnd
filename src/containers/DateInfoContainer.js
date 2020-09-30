import React from 'react';
import { connect } from 'react-redux';
import DateInfo from '../components/DateInfo/DateInfo';

const mapStateToProp = state => {
  return {
    mode: state.modes.mode,
    year: state.date.calendarDate.year,
    month: state.date.calendarDate.month,
    date: state.date.calendarDate.date,
  };
};

export default connect(mapStateToProp, null)(DateInfo);