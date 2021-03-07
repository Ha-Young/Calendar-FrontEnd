import * as actionTypes from "constants/actionTypes";
import { formatUserInput } from "utils";
import { uploadData, deleteData } from "api";

export const toDayCalendar = () => ({ type: actionTypes.TO_DAY_CALENDAR });
export const toWeekCalendar = () => ({ type: actionTypes.TO_WEEK_CALENDAR });
export const prevClick = () => ({ type: actionTypes.PREV });
export const nextClick = () => ({ type: actionTypes.NEXT });

export const addEvent = (userInputEvent) => {
  const event = formatUserInput(null, userInputEvent);
  uploadData(event);
  return { type: actionTypes.ADD_EVENT, payload: event };
};

export const editEvent = (eventId, userInputEvent) => {
  const event = formatUserInput(eventId, userInputEvent);
  uploadData(event);
  return { type: actionTypes.EDIT_EVENT, payload: { eventId, event } };
};

export const deleteEvent = (eventId) => {
  deleteData(eventId);
  return { type: actionTypes.DELETE_EVENT, payload: eventId };
};
