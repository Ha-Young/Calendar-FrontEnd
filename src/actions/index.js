import { ACTION } from "constants/actionTypes";
import {
  generateKey,
  getDateByRef,
  getDateISOByRef,
  getDaysOfWeek,
} from "utils/utilFunction";

const setInitialize = (initialEvent, userId) => {
  if (!Object.keys(initialEvent).length) {
    return {
      type: ACTION.NO_EVENT,
    };
  }

  const today = getDateISOByRef(0);
  const dailyEvent = {};

  for (const [key, value] of Object.entries(initialEvent)) {
    if (value.date === today) {
      dailyEvent[key] = value;
    }
  }

  return {
    type: ACTION.SET_INITIALIZE,
    weeklyEvent: initialEvent,
    dailyEvent,
    userId,
  };
};

const showPreviousDay = (dateCount) => {
  return {
    type: ACTION.SHOW_PREVIOUS_DAY,
    currentDate: getDateByRef(dateCount),
  };
};

const showNextDay = (dateCount) => {
  return {
    type: ACTION.SHOW_NEXT_DAY,
    currentDate: getDateByRef(dateCount),
  };
};

const showPreviousWeek = (weekCount) => {
  return {
    type: ACTION.SHOW_PREVIOUS_WEEK,
    currentWeekDays: getDaysOfWeek(weekCount),
  };
};

const showNextWeek = (weekCount) => {
  return {
    type: ACTION.SHOW_NEXT_WEEK,
    currentWeekDays: getDaysOfWeek(weekCount),
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
  showPreviousDay,
  showNextDay,
  showPreviousWeek,
  showNextWeek,
  addEvent,
  deleteEvent,
  editEvent,
};
