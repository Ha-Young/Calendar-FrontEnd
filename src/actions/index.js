import {
  LOG_IN,
  SUB_DAY,
  ADD_DAY,
  OPEN_MODAL,
  CLOSE_MODAL,
  ADD_NEW_EVENT,
} from "./constants";

export const userLogin = content => {
  return {
    type: LOG_IN,
    payload: {
      content,
    },
  };
};

export const moveToPrevDay = () => {
  return {
    type: SUB_DAY,
  };
};

export const moveToNextDay = () => {
  return {
    type: ADD_DAY,
  };
};

export const openModal = () => {
  return {
    type: OPEN_MODAL,
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  };
};

let nextEventId = 0;
export const addNewEvent = content => {
  return {
    type: ADD_NEW_EVENT,
    payload: {
      id: ++nextEventId,
      content,
    }
  };
};
