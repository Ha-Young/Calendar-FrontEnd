import { combineReducers } from 'redux';

const weekly = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const day = new Date().toISOString().substring(0, 10);
const dayStringify = weekly[new Date().getDay()];

const dateIninitialState = {
  dayStringify: dayStringify,
  current: day,
  selectedDay: day,
  isWeeklyMode: false,
  weekList: makeWeekList()
};

function makeWeekList() {
  const current = new Date();
  const week = [];

  for (let i = 1; i <= 7; i++) {
    const firstDay = current.getDate() - current.getDay() + i;
    const day = new Date(current.setDate(firstDay)).toISOString().slice(0, 10);
    week.push(day);
  }

  return week;
}

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

export const getEventListByDate = (state, target) => {
  const filtered = [];
  // console.log(state, target);
  for (const id of Object.keys(state)) {
    if (state[id].date === target) {
      filtered.push(state[id]);
    }
  }

  return filtered;
}

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