import * as types from './calendar.actionTypes';
import moment from 'moment';

const initialState = {
  currentViewMode: {},
  date: null,
};

const calendarReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_CURRENT_VIEW_MODE:
      return { ...state, currentViewMode: payload };
    case types.SET_DATE:
      return { ...state, date: payload };
    case types.MOVE_TO_NEXT_PAGE:
      return {
        ...state,
        date: moment(state.date).add(state.currentViewMode.gap, 'days'),
      };
    case types.MOVE_TO_PREV_PAGE:
      return {
        ...state,
        date: moment(state.date).subtract(state.currentViewMode.gap, 'days'),
      };
    default:
      return state;
  }
};

export default calendarReducer;
