export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
export const NEXT = "NEXT";
export const PREV = "PREV";
export const TO_DAY_CALENDAR = "TO_DAY_CALENDAR";
export const TO_WEEK_CALENDAR = "TO_WEEK_CALENDAR";
export const ADD_EVENT = "ADD_EVENT";

export const receiveEvents = (events) => ({
  type: RECEIVE_EVENTS,
  events,
});
