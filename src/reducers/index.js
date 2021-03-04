import { combineReducers } from "redux";

import { CHANGE_DATE, CHANGE_VIEW_OPTION } from "../constants/actionTypes";
import { VIEW_OPTION } from "../constants/stateTypes";
import { getCurrentDateStr } from "../utils/date";
import date, { getEventsOnDate } from "./date";
import events, { getEvent } from "./events";
import user from "./user";

function viewOption(state = VIEW_OPTION.DAILY, action) {
  switch (action.type) {
    case CHANGE_VIEW_OPTION:
      return action.payload.viewOption;

    default:
      return state;
  }
}

function currentDate(state = getCurrentDateStr(), action) {
  switch (action.type) {
    case CHANGE_DATE:
      return action.payload.currentDate;

    default:
      return state;
  }
}

export default combineReducers({
  viewOption,
  currentDate,
  date,
  events,
  user,
});

export function getVisibleEventsEachDay(dateState, eventsState) {
  console.log('getVisibleEventsEachDay', dateState, eventsState);

  const result = {};

  const mappedList = dateState.visibleId.map(dateId =>
    getEventsOnDate(dateState, dateId).map(eventId =>
      getEvent(eventsState, eventId)
    )
  );

  for(let idx = 0; idx < mappedList.length; idx++) {
    result[dateState.visibleId[idx]] = mappedList[idx];
  }

  return result;
}
