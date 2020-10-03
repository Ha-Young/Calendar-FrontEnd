import React from 'react';
import { connect } from 'react-redux';
import randomColorPicker from '../utils/randomColorPicker';
import EventCell from '../components/EventCell/EventCell';

const EventContainer = ({ detailsList, weekIndex }) => {
  detailsList = Object.entries(detailsList);

  return detailsList.map(details => {
    const parsedWeekIndex = Number(details[0]);

    if (parsedWeekIndex === weekIndex) {
      const dayDetails = Object.values(details[1]);

      return dayDetails.map((details, i) => {

        return <EventCell key={i} details={details} bgColor={randomColorPicker}/>;
      });
    }

    return null;
  });
};
const mapStateToProps = state => {
  return {
    detailsList: state.eventDataReducer.detailsList,
  };
};
const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventContainer);
