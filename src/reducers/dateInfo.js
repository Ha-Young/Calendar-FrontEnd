import { generateDay, generateDayString, generateWeekList } from '../utils/date';

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
    case 'LOADED_EVENTS':
      return {
        ...state,
        ...action.payload
      };
    case 'CHANGE_CALENDAR_VIEW_MODE':
      return {
        ...state,
        ...action.payload
      };
    case 'BACKWARD_DAYS':
    case 'FORWARD_DAYS':
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
