import { eventForm, userEvent, SET_CURRENT_DATE } from "../constants/actionTypes";

export const setEventFormFor = {
  title: (title) => ({type: eventForm.SET_TITLE, payload: title}),
  content: (content) => ({type: eventForm.SET_CONTENT, payload: content}),
  year: (year) => ({type: eventForm.SET_YEAR, payload: year}),
  month: (month) => ({type: eventForm.SET_MONTH, payload: month}),
  date: (date) => ({type: eventForm.SET_DATE, payload: date}),
  fromHour: (hour) => ({type: eventForm.SET_FROM_HOUR, payload: hour}),
  toHour: (hour) => ({type: eventForm.SET_TO_HOUR, payload: hour}),
  allDate: (dateForm) => ({type: eventForm.SET_ALL_DATE, payload: dateForm}),
  correct: (form) => ({type: eventForm.CORRECT_EVENT, payload: form}),
  clearForm: (form) => ({type: eventForm.CLEAR_FORM, payload: form}),
};

export const setUserEventFor = {
  register: (event) => ({type: userEvent.SET_EVENT, payload: event}),
  clear: (eventId) => ({type: userEvent.CLEAR_EVENT, payload: eventId}),
};

export const setCurrentDate = (dateBundle) => ({type: SET_CURRENT_DATE, payload: dateBundle});
