// TODO: Go to `./firebase.js` and update your firebase config.
import { database } from "firebase";
import firebase from "./firebase";

export async function saveSampleData() {
  const database = firebase.database();

  // Note: `set` method returns a promise.
  // Reference: https://firebase.google.com/docs/database/web/read-and-write#receive_a_promise

  const initialData = database.ref("events");
  const data = await initialData.once("value");

  return data.val();
}

export async function addEvent(event, newPostKey) {
  const database = firebase.database();
  const { eventDate } = event;

  await database.ref(`events/${eventDate}/${newPostKey}`).set(event);
}

export function getEventKey() {
  const database = firebase.database();
  const newPostKey = database.ref().child("events").push().key;

  return newPostKey;
}

export async function removeEvent(event) {
  const database = firebase.database();
  const { eventDate, eventId } = event;

  await database.ref(`events/${eventDate}/${eventId}`).set(null);
}

