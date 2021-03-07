import { userEvent, SET_CURRENT_DATE } from "../constants/actionTypes";

export const setUserEventFor = {
  register: (event) => ({type: userEvent.SET_EVENT, payload: event}),
  registerAll: (eventAll) => ({type: userEvent.SET_EVENT_ALL, payload: eventAll}),
  delete: (eventId) => ({type: userEvent.DELETE_EVENT, payload: eventId}),
};

export const setCurrentDate = (dateBundle) => ({type: SET_CURRENT_DATE, payload: dateBundle});
