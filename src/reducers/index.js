import { combineReducers } from 'redux';

const today = new Date().toISOString().substring(0, 10);

const dateIninitialState = {
  today: today,
  selectedDay: today,
  weeklyMode: false,
};

// const eventsInitialState = {
//   // byId: {},
//   // allEvents: [],
// }

const date = function (state = dateIninitialState, action) {
  switch (action.type) {
    default:
      return state;
  }
};

const events = function (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_EVENTS':
      return [...new Set(
        [...state,
        ...action.events])
      ];
    case 'ADD_EVENT':
      return [
        ...state,
        action.events
      ];
    default:
      return state;
  }
};

export default combineReducers({
  date: date,
  events: events,
});

export const getEventList = (state, day) => {
  // 29
  // state.events;
}