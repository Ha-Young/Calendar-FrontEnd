import * as types from "../constants/actionTypes";

let nextTodoId = 0

export const selectDay = date => ({
  type: types.SELECT_DAY,
  payload: {
    selectedDate: date,
  },
});

export const nextButtonClicked = () => ({
  type: types.NEXT_BUTTON_CLICKED,
});

export const prevButtonClicked = () => ({
  type: types.PREV_BUTTON_CLICKED,
});

export const loadEvents = (events) => ({
  type: types.LOAD_EVENTS_OF_SELECTED_DATE,
  payload: {
    events: events,
  }
});
