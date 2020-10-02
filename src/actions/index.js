import {
  LOG_IN,
  SUB_DAY,
  ADD_DAY,
  OPEN_MODAL,
  CLOSE_MODAL,
  NEW_EVENT,
} from "./constants";

export const userLogin = text => {
  return {
    type: LOG_IN,
    text,
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

export const updateNewEvent = text => {
  return {
    type: NEW_EVENT,
    text,
  };
};
