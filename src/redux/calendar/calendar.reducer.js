import * as types from './calendar.actionTypes';
import moment from 'moment';

import getDatesShown from '../../utils/getDatesShown';

const initialState = {
  currentViewMode: {},
  baseDate: null,
  datesShown: [],
  eventLists: [],
};

const calendarReducer = (state = initialState, { type, payload }) => {
  let newBaseDate;

  switch (type) {
    case types.SET_CURRENT_VIEW_MODE:
      return {
        ...state,
        currentViewMode: payload,
        datesShown: getDatesShown(state.baseDate, payload.gap),
      };
    case types.SET_BASE_DATE:
      return {
        ...state,
        baseDate: payload,
        datesShown: getDatesShown(payload, state.currentViewMode.gap),
      };
    case types.SET_EVENT_LISTS:
      return {
        ...state,
        eventLists: payload,
      };
    case types.MOVE_TO_NEXT_PAGE:
      newBaseDate = moment(state.baseDate).add(
        state.currentViewMode.gap,
        'days'
      );
      return {
        ...state,
        baseDate: newBaseDate,
        datesShown: getDatesShown(newBaseDate, state.currentViewMode.gap),
      };
    case types.MOVE_TO_PREV_PAGE:
      newBaseDate = moment(state.baseDate).subtract(
        state.currentViewMode.gap,
        'days'
      );
      return {
        ...state,
        baseDate: newBaseDate,
        datesShown: getDatesShown(newBaseDate, state.currentViewMode.gap),
      };

    default:
      return state;
  }
};

export default calendarReducer;
