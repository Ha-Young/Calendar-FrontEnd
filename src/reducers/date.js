import { combineReducers } from "redux";

import { CREATE_EVNETS, RECEIVE_EVENTS } from "../constants/actionTypes";

const initialStatus_byId = {
  "2021-03-03": {
    id: "2021-03-03",
    events: ["2021-03-03_12:2"],
  },
  "2021-03-01": {
    id: "2021-03-01",
    events: ["2021-03-01_12:2"],
  },
  "2020-03-04": {
    id: "2020-03-04",
    events: ["2020-03-04_13:4"],
  },
};

function byId(state = initialStatus_byId, action) {
  switch(action.type) {
    case CREATE_EVNETS:
      const event = action.payload;
      const eventId = event.id;
      const dateId = event.date;
      const newState = { ...state };

      if (dateId in newState) {
        newState[dateId].events = newState[dateId].events.concat(eventId);
      } else {
        newState[dateId] = {
          id: dateId,
          events: [eventId],
        };
      }
      return newState;

    case RECEIVE_EVENTS:
      console.log('receive data', state, action);
      return state;

    default:
      return state;
  }
}

// function visibleId(state = [], action) {
//   switch(action.type) {
//   }
// }

export default combineReducers({
  byId,
  // visibleId
});
