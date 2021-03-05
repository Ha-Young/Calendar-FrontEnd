import {
  CHANGE_CALENDAR_MODE,
  MOVE_TO_PREV_DATE,
  MOVE_TO_NEXT_DATE,

  ADD_NEW_EVENT,
  GET_USER_EVENTS,
} from "./actionTypes";

export function changeCalendarMode(calendarMode) {
  return {
    type: CHANGE_CALENDAR_MODE,
    calendarMode,
  }
}

export function moveToPrevDate(newDate) {
  return {
    type: MOVE_TO_PREV_DATE,
    newDate,
  }
}

export function moveToNextDate(newDate) {
  return {
    type: MOVE_TO_NEXT_DATE,
    newDate,
  }
}

export function addNewEvent(userInputInfo) {
  return {
    type: ADD_NEW_EVENT,
    userInputInfo,
  }
}

export function getUserEvents(fetchedUserEvents) {
  return {
    type: GET_USER_EVENTS,
    fetchedUserEvents,
  }
}
