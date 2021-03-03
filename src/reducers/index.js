import { combineReducers } from "redux";

import { currentDate, viewOption } from "./common";
import date, { getEventsOnDate } from "./date";
import events, { getEvent } from "./events";

export default combineReducers({
  viewOption,
  currentDate,
  events,
  date,
});

export function getVisibleEventsEachDay(dateState, eventsState) {
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
