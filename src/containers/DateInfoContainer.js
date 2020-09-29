import React from 'react';
import { connect } from 'react-redux';
import DateInfo from '../components/DateInfo/DateInfo';


const DateInfoContainer = ({ year, month, day }) => {
  return (
    <DateInfo
      year={year}
      month={month}
      day={day}
    />
  );
};

const mapStateToProp = state => {
  return {
    year: state.date.year,
    month: state.date.month,
    day: state.date.day,
  };
};

export default connect(mapStateToProp, null)(DateInfoContainer);