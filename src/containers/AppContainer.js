import React from 'react';
import { connect } from 'react-redux';
import App from '../components/App/App';
import { format } from 'date-fns';
import { UPDATE_CURRENT_DATE } from '../constants/ActionTypes';

function AppContainer ({ handleNextButtonClick, handlePreviousButtonClick, currentDisplayToday, currentDisplayDate, currentDisplayDay }) {
  return (
    <App
      handleNextButtonClick={handleNextButtonClick}
      handlePreviousButtonClick={handlePreviousButtonClick}
      currentDisplayToday={currentDisplayToday}
      currentDisplayDate={currentDisplayDate}
      currentDisplayDay={currentDisplayDay}
    />
  );
}

const mapStateToProps = (state) => {
  return {
    currentDisplayToday: format(state.currentDate, 'yyyy/MM/dd'),
    currentDisplayDate: format(state.currentDate, 'dd'),
    currentDisplayDay: format(state.currentDate, 'EEEE')
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleNextButtonClick: () => {
      dispatch({
        type: UPDATE_CURRENT_DATE,
        direction: 1
      })
    },
    handlePreviousButtonClick: () => {
      dispatch({
        type: UPDATE_CURRENT_DATE,
        direction: -1
      })
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
