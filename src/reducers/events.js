import { combineReducers } from "redux";
import {
  DELETE_EVENT,
  DETAIL_EVENT,
  EDIT_EVENT,
  INIT_EVENT,
  SUBMIT_EVENT,
} from "../constants/actionTypes";
import { getWeeklyKeyFormats } from "../utils/date";

function eventsById(state = {}, action) {
  const { payload } = action;

  switch (action.type) {
    case SUBMIT_EVENT: {
      const { date, title, content, start, end } = payload;

      return {
        ...state,
        [payload.start] : {
          date,
          title,
          content,
          start,
          end,
        }
      };
    }
    case EDIT_EVENT: {
      const { event, prevId } = payload;
      const copy = Object.assign({}, state);

      if (prevId !== event.start) {
        delete copy[prevId];
      }

      copy[event.start] = event;

      return copy;
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
    case SUBMIT_EVENT: {
      const { start } = payload;

      return [
        ...state,
        start,
      ];
    }
    case EDIT_EVENT: {
      const { prevId, event: { start } } = payload;
      const copy = state.slice();

      if (prevId === start) {
        return state;
      }

      for (let i = 0; i < copy.length; i ++) {
        if (copy[i] === prevId) {
          copy.splice(i, 1, start);
          break;
        }
      }

      return copy;
    }
    case DELETE_EVENT: {
      const { prevId } = payload;
      const copy = state.slice();

      for (let i = 0; i < copy.length; i ++) {
        if (copy[i] === prevId) {
          copy.splice(i, 1);
          break;
        }
      }

      return copy;
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
    case SUBMIT_EVENT:
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

export function sortEvent(event) {
  return {
    ...event,
    date: event.date.format("YYYY-MM-DD"),
  };
}

export function getWeeklyEvents(date, events) {
  const weeklyKeys = getWeeklyKeyFormats(date);

  return weeklyKeys.map((date) => events[date])
                  .map((eventsOfDay) => {
                    if (!eventsOfDay) {
                      return null;
                    }

                    const eventList = eventsOfDay.allIds;
                    const result = {};

                    for (const key of eventList) {
                      const event = eventsOfDay.byId[key];

                      result[event.start] = event;
                    }

                    return result;
                  });
}
