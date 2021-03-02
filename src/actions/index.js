/*

  Action Creators

  ref: https://github.com/reduxjs/redux/blob/master/examples/shopping-cart/src/actions/index.js

 */

import { ACTION } from "constants/actionTypes";

const addEvent = (obj) => {
  return {
    type: ACTION.ADD_EVENT,
    obj,
  };
};

const deleteEvent = (id) => {
  return {
    type: ACTION.DELETE_EVENT,
    id: parseInt(id),
  };
};

const editEvent = (obj) => {
  return {
    type: ACTION.EDIT_EVENT,
    obj,
  };
};

export const actionCreators = {
  addEvent,
  deleteEvent,
  editEvent,
};
