import { authService, firebaseInstance } from "./firebaseService";
import { mockEvent } from "utils/mock.js";
import { getDateISOByRef, parseDate } from "utils/utilFunction";

const database = firebaseInstance.database();

export async function fetchDailyEvent(callback) {}

export async function initializeApp(callback) {
  const userId = authService.currentUser.uid;
  const { year, month, weekOfMonth } = parseDate(getDateISOByRef(0));

  await database
    .ref(`/events/${userId}/${year}/${month}/${weekOfMonth}`)
    .on("value", (snapshot) => {
      if (snapshot) {
        callback(snapshot.val());
      } else {
        return;
      }
    });
}

export const addToFirebase = async (newEvent, id) => {
  const { date } = newEvent;
  const userId = authService.currentUser.uid;
  const { year, month, weekOfMonth } = parseDate(date);

  await database
    .ref(`/events/${userId}/${year}/${month}/${weekOfMonth}`)
    .update({ [id]: newEvent });
};

export const editToFirebase = async (editedEvent, id) => {
  const { date } = editedEvent;
  const userId = authService.currentUser.uid;
  const { year, month, weekOfMonth } = parseDate(date);

  await database
    .ref(`/events/${userId}/${year}/${month}/${weekOfMonth}`)
    .update({ [id]: editedEvent });
};

export const deleteAtFirebase = async (id, date) => {
  const userId = authService.currentUser.uid;
  const { year, month, weekOfMonth } = parseDate(date);

  await database
    .ref(`/events/${userId}/${year}/${month}/${weekOfMonth}`)
    .update({ [id]: null });
};

const getCurrentEventList = async () => {};

export const updateEventList = async (updatedEvent) => {
  await database
    .ref(`/events/${authService.currentUser.uid}`)
    .set(updatedEvent);
};

export const testFirebase = async () => {
  mockEvent.forEach((event) => addToFirebase(event));
};
