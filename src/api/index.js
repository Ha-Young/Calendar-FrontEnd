// TODO: Go to `./firebase.js` and update your firebase config.
import firebase from "./firebase";

export async function fetchEventData() {
  // Note: `set` method returns a promise.
  // Reference: https://firebase.google.com/docs/database/web/read-and-write#receive_a_promise
  try {
    const database = firebase.database();

    const initialData = database.ref("events");
    const data = await initialData.once("value");

    return data.val();
  } catch (error) {
    console.error(error);
  }
}

export async function addEventDatabase(event, newPostKey) {
  try {
    const database = firebase.database();
    const { eventDate } = event;

    await database.ref(`events/${eventDate}/${newPostKey}`).set(event);
  } catch (error) {
    console.error(error);
  }
}

export async function removeEventDatabase(event) {
  try {
    const database = firebase.database();
    const { eventDate, eventId } = event;

    await database.ref(`events/${eventDate}/${eventId}`).set(null);
  } catch (error) {
    console.error(error);
  }
}

export function getEventKey() {
  try {
    const database = firebase.database();
    const newPostKey = database.ref().child("events").push().key;

    return newPostKey;
  } catch (error) {
    console.error(error);
  }
}
