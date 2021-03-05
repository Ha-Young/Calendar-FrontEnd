import {
  addToFirebase,
  editAtFirebase,
  deleteAtFirebase,
  addUserData,
} from "api/firebaseAPIs";
import { authService } from "api/firebaseService";
import { ACTION } from "constants/actionTypes";
import { getDateISO } from "utils/utilFunction";

const setInitialize = (initialEvent) => {
  if (!Object.keys(initialEvent).length) {
    return {
      type: ACTION.NO_EVENT,
    };
  }

  const today = getDateISO(0);
  const dailyEvent = {};
  const { displayName, email, photoURL, phoneNumber } = authService.currentUser;

  for (const [key, value] of Object.entries(initialEvent)) {
    if (value.date === today) {
      dailyEvent[key] = value;
    }
  }

  return {
    type: ACTION.SET_INITIALIZE,
    userData: { displayName, email, photoURL, phoneNumber },
    weeklyEvent: initialEvent,
    dailyEvent,
  };
};

const setUserData = (userId) => {
  const { displayName, email, photoURL, phoneNumber } = authService.currentUser;
  addUserData(userId, { displayName, email, photoURL, phoneNumber });
  return {
    type: ACTION.SET_USER_DATA,
    userId,
    userData: { displayName, email, photoURL, phoneNumber },
  };
};

const showDaily = (events) => {
  return {
    type: ACTION.SHOW_DAILY,
    dailyEvent: events,
  };
};

const showWeekly = (events) => {
  return {
    type: ACTION.SHOW_WEEKLY,
    weeklyEvent: events,
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
  editAtFirebase(editedEvent, id);
  return {
    type: ACTION.EDIT_EVENT,
    editedEvent,
    id,
  };
};

export const actionCreators = {
  setInitialize,
  setUserData,
  showDaily,
  showWeekly,
  addEvent,
  deleteEvent,
  editEvent,
};
