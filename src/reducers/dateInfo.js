import { generateDay, generateDayString, generateWeekList } from '../utils/date';
import { LOAD_ENDED, CHANGE_CALENDAR_VIEW_MODE, CHANGE_TARGET_DATE } from '../actions/index';

const dateInfoIninitialState = {
  dayStringify: generateDayString(),
  current: generateDay(),
  selectedDay: generateDay(),
  weekList: generateWeekList(),
  isWeeklyMode: true,
  isLoading: true
};

export const dateInfo = (state = dateInfoIninitialState, action) => {
  switch (action.type) {
    case LOAD_ENDED:
      return {
        ...state,
        ...action.payload
      };
    case CHANGE_CALENDAR_VIEW_MODE:
      return {
        ...state,
        ...action.payload
      };
    case CHANGE_TARGET_DATE:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
