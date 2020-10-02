import React from 'react';
import { connect } from 'react-redux';
import { setDetails } from '../actions/index';
import { DETAIL_OPEN } from '../constants/ActionType';
import ScheduleTimeItem from '../components/ScheduleTimeItem/ScheduleTimeItem';

const ScheduleTimeItemContainer = ({ dayIndex, timeIndex, openDetails }) => {
  return (
    <ScheduleTimeItem dayIndex={dayIndex} timeIndex={timeIndex} openDetails={openDetails}/>
  );
};
const mapDispatchProps = dispatch => {
  return {
    openDetails: (e) => {
      const idArray = e.target.id.split("-");
      const dayIndex = idArray[1];
      const timeIndex = idArray[2];
      dispatch(setDetails(DETAIL_OPEN, dayIndex, timeIndex));
    },
  };
};

export default connect(null, mapDispatchProps)(ScheduleTimeItemContainer);
