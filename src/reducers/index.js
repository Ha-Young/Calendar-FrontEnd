import { combineReducers } from 'redux';

const weekly = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const day = new Date().toISOString().substring(0, 10);
const dayStringify = weekly[new Date().getDay()];

const dateIninitialState = {
  dayStringify: dayStringify,
  today: day,
  selectedDay: day,
  weeklyMode: false,
};

// const eventsInitialState = {
//   events: {}
// }

const date = (state = dateIninitialState, action) => {
  switch (action.type) {
    case 'CHANGE_CALENDAR_VIEW_MODE':
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
      return {
        ...state,
        ...action.events
      };
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

// const events = function (state = [], action) {
//   switch (action.type) {
//     case 'RECEIVE_EVENTS':
//       return [...new Set(
//         [...state,
//         ...action.events])
//       ];
//     case 'ADD_EVENT':
//       return [
//         ...state,
//         action.events
//       ];
//     default:
//       return state;
//   }
// };

// case 'ADD_EVENT':
//       const { date } = action.events;
//       const timeStampId = `date_${new Date(date).getTime()}`;
//       const newId = `event_${Math.random().toString(36).substring(2)}`;

//       action.events.id = newId;

//       if(!state[timeStampId]) {
//         return {
//           ...state,
//           [timeStampId]: [action.events]
//         };
//       }

//       state[timeStampId].push(action.events);
//       return state;