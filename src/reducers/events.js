import { combineReducers } from "redux";
import {
  DETAIL_EVENT,
  EDIT_EVENT,
  SUBMIT_EVENT,
} from "../constants/actionTypes";
import { getWeeklyKeyFormats } from "../utils/date";

function eventsById(state = {}, action) {
  const { payload } = action;

  switch (action.type) {
    case SUBMIT_EVENT:
      return {
        ...state,
        [payload.start] : {
          date: payload.date,
          title: payload.title,
          content: payload.content,
          start: payload.start,
          end: payload.end,
        }
      };
    default:
      return state;
  }
}

function eventsAllIds(state = [], action) {
  const { payload } = action;

  switch (action.type) {
    case SUBMIT_EVENT:
      return [
        ...state,
        payload.start,
      ];
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
      return {
        ...state,
        [payload.date]: eventsOfDay(state[payload.date], action),
      };
    case DETAIL_EVENT:
      return {
        ...state,
        targetEvent: state[payload.date].byId[payload.id],
      };
    case EDIT_EVENT:
      return {};
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
                      return;
                    }

                    const eventList = eventsOfDay.allIds;
                    const result = [];

                    for (const key of eventList) {
                      result.push(eventsOfDay.byId[key]);
                    }

                    return result;
                  });
}
