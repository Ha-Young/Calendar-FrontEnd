// TODO: Go to `./firebase.js` and update your firebase config.
import firebase from "./firebase";

const database = firebase.database();

export async function uploadData(event) {
  console.log("event in async uploadData", event);
  // Note: `set` method returns a promise.
  // Reference: https://firebase.google.com/docs/database/web/read-and-write#receive_a_promise
  if (!event) {
    return;
  }

  const id = event.id;
  const eventsByIds = await database.ref("event").set(eventsByIds);
}

export async function deleteData(eventId) {}
