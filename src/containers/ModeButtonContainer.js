import React from 'react';
import { connect } from 'react-redux';
import ModeButton from '../components/ScheduleModeChanger/ScheduleModeChanger';
import { changeMode } from '../actions/index'

const ModeButtonContainer = ({ changeMode }) => {
  return (
    <ModeButton onChangeMode={changeMode}/>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    changeMode: mode => {
      dispatch(changeMode(mode));
    }
  };
};

export default connect(null, mapDispatchToProps)(ModeButtonContainer);