import * as types from "../constants/actionTypes";

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

export const toggleCalendarView = (isDailyView) => ({
  type: types.TOGGLE_CALENDAR_VIEW,
  payload: {
    isDailyView: isDailyView,
  }
});

export const selectEvent = (selectedEventId, selectedEventDayIndex) => ({
  type: types.SELECT_EVENT,
  payload: {
    selectedEventId: selectedEventId,
    selectedEventDayIndex: selectedEventDayIndex,
  }
});

export const throwError = (err) => ({
  type: types.ERROR_OCCUR,
  payload: {
    errorMessage: err,
  }
});
