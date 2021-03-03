import { calendar, userEvent } from "../constants/actionTypes";

export const setCalendarFor = {
  year: (year) => ({type: calendar.SET_YEAR, payload: year}),
  month: (month) => ({type: calendar.SET_MONTH, payload: month}),
  date: (date) => ({type: calendar.SET_DATE, payload: date}),
  fromHour: (hour) => ({type: calendar.SET_FROM_HOUR, payload: hour}),
  toHour: (hour) => ({type: calendar.SET_TO_HOUR, payload: hour}),
  fromToHour: (hour) => ({type: calendar.SET_FROM_TO_HOUR, payload: hour}),
};

export const setUserEvent = (event) => ({
  type: userEvent.SET_EVENT,
  payload: event,
});
