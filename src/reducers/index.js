import { DateTime } from 'luxon';
import * as types from "../constants/actionTypes";
import { formatDate } from "../utils";

const initialState = {
  selectedDate: DateTime.now(),
  events: [],
  selectedEventInfo: {},
  isDailyView: true,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.SELECT_DAY: {
      const newDate = formatDate(action.payload.selectedDate);

      return {
        ...state,
        selectedDate: newDate,
      };
    }

    case types.NEXT_BUTTON_CLICKED: {
      const newDate = state.isDailyView
      ? state.selectedDate.plus({ days: 1 })
      : state.selectedDate.plus({ days: 7 });

      return {
        ...state,
        selectedDate: newDate,
      };
    }

    case types.PREV_BUTTON_CLICKED: {
      const newDate = state.isDailyView
      ? state.selectedDate.minus({ days: 1 })
      : state.selectedDate.minus({ days: 7 });

      return {
        ...state,
        selectedDate: newDate,
      };
    }

    case types.LOAD_EVENTS_OF_SELECTED_DATE: {
      return {
        ...state,
        events: action.payload.events,
      };
    }

    case types.TOGGLE_CALENDAR_VIEW: {
      return {
        ...state,
        isDailyView: !state.isDailyView,
      };
    }

    case types.SELECT_EVENT: {
      return {
        ...state,
        selectedEventInfo: {
          selectedEventId: action.payload.selectedEventId,
          selectedEventDayIndex: action.payload.selectedEventDayIndex,
        },
      };
    }

    default:
      return state;
  }
}
