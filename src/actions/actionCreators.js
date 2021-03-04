import {
  addToFirebase,
  editToFirebase,
  deleteAtFirebase,
} from "api/firebaseAPIs";
import { ACTION } from "constants/actionTypes";
import { getDateISO, getDaysOfWeek } from "utils/utilFunction";

const setInitialize = (initialEvent, userId) => {
  if (!Object.keys(initialEvent).length) {
    return {
      type: ACTION.NO_EVENT,
    };
  }

  const today = getDateISO(0);
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
const showDaily = () => {};

const showPreviousDay = (dateCount) => {
  return {
    type: ACTION.SHOW_PREVIOUS_DAY,
    // currentDate: getDateByRef(dateCount),
  };
};

const showNextDay = (dateCount) => {
  return {
    type: ACTION.SHOW_NEXT_DAY,
    // currentDate: getDateByRef(dateCount),
  };
};

const showPreviousWeek = (weekCount) => {
  return {
    type: ACTION.SHOW_PREVIOUS_WEEK,
    currentWeekDays: getDaysOfWeek(weekCount),
  };
};

const showWeekly = (events) => {
  return {
    type: ACTION.SHOW_WEEKLY,
    weeklyEvent: events,
  };
};

const showNextWeek = (weekCount) => {
  return {
    type: ACTION.SHOW_NEXT_WEEK,
    currentWeekDays: getDaysOfWeek(weekCount),
  };
};

const addEvent = (newEvent = {}, id) => {
  if (!Object.keys(newEvent).length) {
    return;
  }

  addToFirebase(newEvent, id);

  return {
    type: ACTION.ADD_EVENT,
    newEvent,
    id,
  };
};

const deleteEvent = (id, date) => {
  deleteAtFirebase(id, date);
  return {
    type: ACTION.DELETE_EVENT,
    id,
  };
};

const editEvent = (editedEvent, id) => {
  editToFirebase(editedEvent, id);

  return {
    type: ACTION.EDIT_EVENT,
    editedEvent,
    id,
  };
};

const userLogin = () => {};
const userLogout = () => {};
const editProfile = () => {};

export const actionCreators = {
  setInitialize,
  showDaily,
  showPreviousDay,
  showNextDay,
  showWeekly,
  showPreviousWeek,
  showNextWeek,
  addEvent,
  deleteEvent,
  editEvent,
  userLogin,
  userLogout,
  editProfile,
};
