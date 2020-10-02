import { generateDay, generateDayString, generateWeekList } from '../utils/date';
import { LOAD_ENDED, CHANGE_CALENDAR_VIEW_MODE, CHANGE_TARGET_DATE } from '../actions/index';

const dateInfoInitState = {
  dayStringify: generateDayString(),
  current: generateDay(),
  selectedDay: generateDay(),
  weekList: generateWeekList(),
  isWeeklyMode: true,
  isLoading: true
};

export const dateInfo = (state = dateInfoInitState, { type, payload }) => {
  switch (type) {
    case LOAD_ENDED:
      return {
        ...state,
        isLoading: payload
      };
    case CHANGE_CALENDAR_VIEW_MODE:
      return {
        ...state,
        isWeeklyMode: payload
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
