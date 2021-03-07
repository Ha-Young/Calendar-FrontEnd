import { combineReducers } from "redux";
import {
  DELETE_EVENT,
  DETAIL_EVENT,
  EDIT_EVENT,
  INIT_EVENT,
  ADD_EVENT,
} from "../constants/actionTypes";
import { getWeeklyKeyFormats } from "../utils/date";

function eventsById(state = {}, action) {
  const { payload } = action;

  switch (action.type) {
    case ADD_EVENT: {
      return {
        ...state,
        [payload.start] : {...payload}
      };
    }
    case EDIT_EVENT: {
      const { event, prevId } = payload;
      const copiedState = Object.assign({}, state);

      if (prevId !== event.start) {
        delete copiedState[prevId];
      }

      copiedState[event.start] = event;

      return copiedState;
    }
    case DELETE_EVENT: {
      const { prevId } = payload;
      const copy = Object.assign({}, state);

      delete copy[prevId];

      return copy;
    }
    default:
      return state;
  }
}

function eventsAllIds(state = [], action) {
  const { payload } = action;

  switch (action.type) {
    case ADD_EVENT: {
      const { start } = payload;

      return [
        ...state,
        start,
      ];
    }
    case EDIT_EVENT: {
      const { prevId, event: { start } } = payload;

      return [
        ...state.filter((id) => id !== prevId),
        start,
      ];
    }
    case DELETE_EVENT: {
      const { prevId } = payload;

      return state.filter((id) => id !== prevId);
    }
    default:
      return state;
  }
}

const eventsOfDay = combineReducers({
  byId: eventsById,
  allIds: eventsAllIds,
});

export default function events(state = {}, action) {
  const { payload } = action;

  switch (action.type) {
    case ADD_EVENT:
    case EDIT_EVENT:
    case DELETE_EVENT: {
      const { date } = payload;

      return {
        ...state,
        [date]: eventsOfDay(state[date], action),
      };
    }
    case DETAIL_EVENT: {
      const { date, id } = payload;

      return {
        ...state,
        targetEvent: state[date].byId[id],
      };
    }
    case INIT_EVENT: {
      return {
        ...payload,
      };
    }
    default:
      return state;
  }
}

export function getWeeklyEvents(date, events) {
  const weeklyKeys = getWeeklyKeyFormats(date);

  return weeklyKeys.map((date) => {
    const eventsOfDay = events[date];
    const eventList = eventsOfDay?.allIds;
    const result = {};

    if (!eventsOfDay) {
      return null;
    }

    for (const key of eventList) {
      const event = eventsOfDay.byId[key];

      result[event.start] = event;
    }

    return result;
  });
}
