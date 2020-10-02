import React from 'react';
import { connect } from 'react-redux';
import randomColorPicker from '../utils/randomColorPicker';
import Event from '../components/Event/Event';

const EventContainer = ({ detailsList, dayIndex }) => {
  if (!detailsList[dayIndex]) return null;

  return detailsList[dayIndex].map((details, i) => <Event key={i} details={details} bgColor={randomColorPicker()}/>);
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
