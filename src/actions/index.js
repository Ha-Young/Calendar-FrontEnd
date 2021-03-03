import { ACTION } from "constants/actionTypes";
import { generateKey } from "utils/utilFunction";

const setInitialize = (eventList, userState) => {
  if (!eventList) {
    return {
      type: ACTION.NO_EVENT,
    };
  }

  return {
    type: ACTION.SET_INITIALIZE,
    eventList,
    userState,
  };
};

const addEvent = (newEvent = {}) => {
  if (!Object.keys(newEvent).length) {
    return;
  }

  const id = generateKey();

  return {
    type: ACTION.ADD_EVENT,
    id,
    newEvent,
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
  setInitialize,
  addEvent,
  deleteEvent,
  editEvent,
};
