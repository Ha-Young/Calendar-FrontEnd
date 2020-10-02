import React from 'react';
import { connect } from 'react-redux';
import App from '../components/App/App';
import { format, formatRelative } from 'date-fns';
import { UPDATE_CURRENT_DATE } from '../constants/ActionTypes';

function AppContainer ({ handleNextButtonClick, currentDisplayDate, currentDisplayDay, currentDisplayDayOfWeek }) {
  return (
    <App
      handleNextButtonClick={handleNextButtonClick}
      currentDisplayDate={currentDisplayDate}
      currentDisplayDay={currentDisplayDay}
      currentDisplayDayOfWeek={currentDisplayDayOfWeek}
    />
  );
}

const mapStateToProps = (state) => {
  return {
    currentDisplayDate: format(state.currentDate, 'yyyy/MM/dd'),
    currentDisplayDayOfWeek: format(state.currentDate, 'EEEE'),
    currentDisplayDay: format(state.currentDate, 'dd')
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleNextButtonClick () {
      dispatch({
        type: UPDATE_CURRENT_DATE,
        direction: 1
      });
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
