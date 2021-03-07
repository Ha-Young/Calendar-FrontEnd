import { DateTime } from "luxon";
import * as types from "../constants/actionTypes";
import { formatDate } from "../utils";
import { DEFAULT_ERROR_MESSAGE } from "../constants/string";

const initialState = {
  selectedDate: DateTime.now(),
  events: [],
  selectedEventInfo: {},
  isDailyView: true,
  errorMessage: DEFAULT_ERROR_MESSAGE,
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
      const dayToPlus = state.isDailyView ? { days: 1 } : { days: 7 };
      const newDate = state.selectedDate.plus(dayToPlus);

      return {
        ...state,
        selectedDate: newDate,
      };
    }

    case types.PREV_BUTTON_CLICKED: {
      const dayToMinus = state.isDailyView ? { days: 1 } : { days: 7 };
      const newDate = state.selectedDate.minus(dayToMinus);

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
        isDailyView: action.payload.isDailyView === "daily" ? true : false,
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

    case types.ERROR_OCCUR: {
      return {
        ...state,
        errorMessage: action.payload.errorMessage.message,
      };
    }

    default:
      return state;
  }
}
