import { combineReducers } from "redux";

import { CHANGE_DATE, CREATE_EVNETS,  RECEIVE_EVENTS } from "../constants/actionTypes";
import { VIEW_OPTION } from "../constants/stateTypes";
import { getCurrentDateStr, getWeekDaysBasedOnDate } from "../utils/date";

const initialStatus_byId = {
  "2021-03-03": {
    id: "2021-03-03",
    events: ["2021-03-03_12:2"],
  },
  "2021-03-01": {
    id: "2021-03-01",
    events: ["2021-03-01_12:2"],
  },
  "2021-03-04": {
    id: "2021-03-04",
    events: ["2021-03-04_13:4", "2021-03-04_18:3"],
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

function visibleId(state = [getCurrentDateStr()], action) {
  switch(action.type) {
    case CHANGE_DATE:
      const newVisibleId = getVisibleId({ ...action.payload });
      return newVisibleId;
    default:
      return state;
  }
}

export default combineReducers({
  byId,
  visibleId,
});

export function getEventsOnDate(state, id) {
  if (state.byId[id] && state.byId[id].events) {
    return state.byId[id].events;
  }

  return [];
}

function getVisibleId({ currentDate, viewOption }) {
  if (viewOption === VIEW_OPTION.WEEKLY) {
    return getWeekDaysBasedOnDate(currentDate);
  }

  return [currentDate];
}
