import { authService, firebaseInstance } from "./firebaseService";
import { getDateISO, parseDate } from "utils/utilFunction";

const database = firebaseInstance.database();

export async function initializeApp(callback) {
  const userId = authService.currentUser.uid;
  const { year, monthInFirebase, weekOfMonth } = parseDate(getDateISO(0));
  console.log(year, monthInFirebase, weekOfMonth);

  await database
    .ref(`/events/${userId}/${year}/${monthInFirebase}/${weekOfMonth}`)
    .on("value", (snapshot) => {
      if (snapshot.val()) {
        callback(snapshot.val());
      } else {
        callback({});
      }
    });
}

export async function fetchDailyEvent(callback, date) {}

export function fetchWeeklyEvent(callback, date) {
  const userId = authService.currentUser.uid;
  const { year, monthInFirebase, weekOfMonth } = parseDate(date);

  database
    .ref(`/events/${userId}/${year}/${monthInFirebase}/${weekOfMonth}`)
    .on("value", (snapshot) => {
      if (snapshot.val()) {
        callback(snapshot.val());
      } else {
        callback({});
      }
    });
}

export const addToFirebase = async (newEvent, id) => {
  const { date } = newEvent;
  const userId = authService.currentUser.uid;
  const { year, monthInFirebase, weekOfMonth } = parseDate(date);

  await database
    .ref(`/events/${userId}/${year}/${monthInFirebase}/${weekOfMonth}`)
    .update({ [id]: { ...newEvent, id } });
};

export const editToFirebase = async (editedEvent, id) => {
  const { date } = editedEvent;
  const userId = authService.currentUser.uid;
  const { year, monthInFirebase, weekOfMonth } = parseDate(date);

  await database
    .ref(`/events/${userId}/${year}/${monthInFirebase}/${weekOfMonth}`)
    .update({ [id]: editedEvent });
};

export const deleteAtFirebase = async (id, date) => {
  const userId = authService.currentUser.uid;
  const { year, monthInFirebase, weekOfMonth } = parseDate(date);

  await database
    .ref(`/events/${userId}/${year}/${monthInFirebase}/${weekOfMonth}`)
    .update({ [id]: null });
};
