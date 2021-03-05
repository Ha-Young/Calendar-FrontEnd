// TODO: Go to `./firebase.js` and update your firebase config.
import firebase from "./firebase";

export async function fetchEventData() {
  const database = firebase.database();

  // Note: `set` method returns a promise.
  // Reference: https://firebase.google.com/docs/database/web/read-and-write#receive_a_promise

  const initialData = database.ref("events");
  const data = await initialData.once("value");

  return data.val();
}

export async function addEventDatabase(event, newPostKey) {
  const database = firebase.database();
  const { eventDate } = event;

  await database.ref(`events/${eventDate}/${newPostKey}`).set(event);
}

export function getEventKey() {
  const database = firebase.database();
  const newPostKey = database.ref().child("events").push().key;

  return newPostKey;
}

export async function removeEventDatabase(event) {
  const database = firebase.database();
  const { eventDate, eventId } = event;

  await database.ref(`events/${eventDate}/${eventId}`).set(null);
}

