/*

  Action Creators

  ref: https://github.com/reduxjs/redux/blob/master/examples/shopping-cart/src/actions/index.js

 */
import * as types from "../constants/actionTypes";

export const getEventData = (date, time) => ({
  type: types.GET_DATA,
  payload: { date, time },
});

export const getWeekEventData = (week) => ({
  type: types.GET_WEEK_DATA,
  week,
});

export const createEvent = (event) => ({
  type: types.CREATE_EVENT,
  event,
});

export const deleteEvent = (eventId) => ({
  type: types.DELETE_EVENT,
  eventId,
});
export const updateEvent = (events) => ({
  type: types.UPDATE_EVENT,
  events,
});

export const loadDate = () => ({
  type: types.GET_DATE,
});

export const nextDay = () => ({
  type: types.NEXT_DAY,
});

export const yesterDay = () => ({
  type: types.YESTER_DAY,
});

// export const currentWeek = () => ({
//   type: types.GET_CURRENT_WEEK,
// });

// export const nextWeek = () => ({
//   type: types.GET_NEXT_WEEK,
// });

// export const lastWeek = () => ({
//   type: types.GET_LAST_WEEK,
// });
