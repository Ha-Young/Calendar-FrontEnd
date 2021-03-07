/*

  Action Creators

  ref: https://github.com/reduxjs/redux/blob/master/examples/shopping-cart/src/actions/index.js

 */

import * as actionTypes from "../constants/actionTypes";

export const getPrevDate = () => ({
  type: actionTypes.GET_PREV_DATE,
});

export const getNextDate = () => ({
  type: actionTypes.GET_NEXT_DATE,
});

export const selectDate = (date) => ({
  type: actionTypes.SELECT_DATE,
  date,
});

export const selectTime = (time) => ({
  type: actionTypes.SELECT_TIME,
  time,
});

export const periodUnit = (unit = actionTypes.DAY) => {
  switch (unit) {
    case actionTypes.DAY:
      return {
        type: actionTypes.DAY,
        unit,
      };
    case actionTypes.WEEK:
      return {
        type: actionTypes.WEEK,
        unit,
      };
  }
};

export const addEvent = (event) => ({
  type: actionTypes.ADD_EVENT,
  event,
});

export const editEvent = (event) => ({
  type: actionTypes.EDIT_EVENT,
  event,
});

export const removeEvent = (event) => ({
  type: actionTypes.REMOVE_EVENT,
  event,
});

export const getEventList = (data) => ({
  type: actionTypes.GET_EVENT_LIST,
  data,
});
