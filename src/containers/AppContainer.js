import React from 'react';
import { connect } from 'react-redux';
import App from '../components/App/App';
import { format } from 'date-fns';
import * as ActionTypes from '../constants/ActionTypes';

function AppContainer ({
  handleNextButtonClick,
  handlePreviousButtonClick,
  handleWeeklyButtonClick,
  handleDailyButtonClick,
  currentDisplayToday,
  currentDisplayDate,
  currentDisplayDay
}) {
  return (
    <App
      handleNextButtonClick={handleNextButtonClick}
      handlePreviousButtonClick={handlePreviousButtonClick}
      handleWeeklyButtonClick={handleWeeklyButtonClick}
      handleDailyButtonClick={handleDailyButtonClick}
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
        type: ActionTypes.UPDATE_CURRENT_DATE,
        direction: 1
      });
    },
    handlePreviousButtonClick: () => {
      dispatch({
        type: ActionTypes.UPDATE_CURRENT_DATE,
        direction: -1
      });
    },
    handleWeeklyButtonClick: () => {
      dispatch({
        type: ActionTypes.CHANGE_DISPLAY_VIEW_WEEKLY
      });
    },
    handleDailyButtonClick: () => {
      dispatch({
        type: ActionTypes.CHANGE_DISPLAY_VIEW_DAILY
      });
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
