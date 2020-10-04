import { generateDay, generateDayString, generateWeekList } from '../utils/date';
import { LOAD_ENDED, CHANGE_CALENDAR_VIEW_MODE, CHANGE_TARGET_DATE } from '../actions/index';
import { VIEW } from '../constants/viewMode';

const initialState = {
  dayStringify: generateDayString(),
  current: generateDay(),
  selectedDay: generateDay(),
  weekList: generateWeekList(),
  viewMode: VIEW.WEEKLY_MODE,
  isLoading: true
};

export const dateInfo = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_ENDED:
      return {
        ...state,
        isLoading: payload.loadState
      };
    case CHANGE_CALENDAR_VIEW_MODE:
      return {
        ...state,
        viewMode: payload.viewMode
      };
    case CHANGE_TARGET_DATE:
      if (payload.isADay) {
        return {
          ...state,
          selectedDay: payload.date,
          dayStringify: generateDayString(payload.date)
        };
      }
      return {
        ...state,
        weekList: payload.date
      };
    default:
      return state;
  }
};
