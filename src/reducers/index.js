import { combineReducers } from 'redux';
import { generateToday, generateDayString, generateWeekList } from '../utils/date';

const dateIninitialState = {
  dayStringify: generateDayString(),
  current: generateToday(),
  selectedDay: generateToday(),
  weekList: generateWeekList(),
  isWeeklyMode: true,
  isLoading: true,
};

const date = (state = dateIninitialState, action) => {
  switch (action.type) {
    case 'LOADED_EVENTS':
      return {
        ...state,
        ...action.payload
      }
    case 'CHANGE_CALENDAR_VIEW_MODE':
      return {
        ...state,
        ...action.payload
      }
    case 'BACKWARD_DAYS':
    case 'FORWARD_DAYS':
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
};

const events = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_EVENTS':
      return {
        ...state,
        ...action.events
      };
    case 'ADD_EVENT':
    case 'UPDATE_EVENT':
      return {
        ...state,
        ...action.events
      };
    case 'DELETE_EVENT':
      const copiedState = Object.assign({}, state);
      delete copiedState[action.events];
      return copiedState;
    default:
      return state;
  }
};

export default combineReducers({
  date: date,
  events: events,
});

export const getEventById = (state, id) => {
  return (state[id]);
};

export const getEventListByDate = (state, target) => {
  const filtered = [];

  for (const id of Object.keys(state)) {
    if (state[id].date === target) {
      filtered.push(state[id]);
    }
  }

  return filtered;
}
