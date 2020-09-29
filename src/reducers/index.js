import { act } from 'react-dom/test-utils';
import { combineReducers } from 'redux';

const today = new Date().getDate();

const dateIninitialState = {
  today: today,
  selectedDay: today,
  weeklyMode: false,
};

const eventsInitialState = {
  // byId: {},
  // allEvents: [],
}

const date = function (state = dateIninitialState, action) {
  switch (action.type) {
    default:
      return state;
  }
};

const events = function (state = eventsInitialState, action) {
  switch (action.type) {
    case 'RECEIVE_EVENTS':
      return {
        ...state,
        ...action.events
      }
    default:
      return state;
  }
};

export default combineReducers({
  date: date,
  events: events,
});

export const getEvents = (state) => state.events;