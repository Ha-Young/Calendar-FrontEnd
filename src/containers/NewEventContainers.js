import React from 'react';
import { connect } from 'react-redux';
import EventModal from '../components/EventModal/EventModal';
import { saveEventData } from '../utils/api';

const newEventContainer = ({ onSubmit }) => {
  return (
    <EventModal onSubmit={onSubmit}/>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmit(data) {
      saveEventData(data, dispatch);
    }
  };
};

export default connect(null, mapDispatchToProps)(newEventContainer);
