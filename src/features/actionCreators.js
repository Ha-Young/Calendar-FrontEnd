import { eventForm, userEvent } from "../constants/actionTypes";

export const setEventFormFor = {
  title: (title) => ({type: eventForm.SET_TITLE, payload: title}),
  content: (content) => ({type: eventForm.SET_CONTENT, payload: content}),
  year: (year) => ({type: eventForm.SET_YEAR, payload: year}),
  month: (month) => ({type: eventForm.SET_MONTH, payload: month}),
  date: (date) => ({type: eventForm.SET_DATE, payload: date}),
  fromHour: (hour) => ({type: eventForm.SET_FROM_HOUR, payload: hour}),
  toHour: (hour) => ({type: eventForm.SET_TO_HOUR, payload: hour}),
  fromToHour: (hour) => ({type: eventForm.SET_FROM_TO_HOUR, payload: hour}),
};

export const setUserEventFor = {
  register: (event) => ({type: userEvent.SET_EVENT, payload: event}),
}