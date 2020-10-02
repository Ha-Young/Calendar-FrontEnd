import * as types from './calendar.actionTypes';
import moment from 'moment';

import getDatesShown from '../../utils/getDatesShown';
import getEventLists from '../../firebase/utils/getEventLists';

const initialState = {
  currentViewMode: {},
  baseDate: null,
  datesShown: [],
  eventLists: [],
};

const calendarReducer = (state = initialState, { type, payload }) => {
  let newBaseDate;

  switch (type) {
    case types.SET_EVENT_LISTS:
      console.log('이벤트리스트 추가');
      return {
        ...state,
        eventLists: getEventLists(payload, state.datesShown),
      };
    case types.SET_CURRENT_VIEW_MODE:
      return {
        ...state,
        currentViewMode: payload,
        datesShown: getDatesShown(state.baseDate, payload.gap),
      };
    case types.SET_BASE_DATE:
      return { ...state, baseDate: payload };
    case types.SET_DATES_SHOWN:
      return {
        ...state,
        datesShown: getDatesShown(payload, state.currentViewMode.gap),
      };

    case types.MOVE_TO_NEXT_PAGE:
      newBaseDate = moment(payload).add(state.currentViewMode.gap, 'days');
      return {
        ...state,
        baseDate: newBaseDate,
        datesShown: getDatesShown(newBaseDate, state.currentViewMode.gap),
      };
    case types.MOVE_TO_PREV_PAGE:
      newBaseDate = moment(payload).subtract(state.currentViewMode.gap, 'days');
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
