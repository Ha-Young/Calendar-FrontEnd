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
        console.log(snapshot.val());
        callback(snapshot.val());
      } else {
        return;
      }
    });
}

export async function setNewEvent(newEvent) {
  const { id, date } = newEvent;
  const userId = authService.currentUser.uid;
  const { year, month, weekOfMonth } = parseDate(date);

  await database
    .ref(`/events/${userId}/${year}/${month}/${weekOfMonth}`)
    .update({ [id]: newEvent });

  // await database.ref(`/dates/${year}/${month}/${weekOfMonth}`).update(newEvent);

  // await database.ref(`/users/${authService.currentUser.uid}`).set(newEvent);
}

const getCurrentEventList = async () => {};

export const updateEventList = async (updatedEvent) => {
  await database
    .ref(`/events/${authService.currentUser.uid}`)
    .set(updatedEvent);
};

export const testFirebase = async () => {
  mockEvent.forEach((event) => setNewEvent(event));
};
