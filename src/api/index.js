// TODO: Go to `./firebase.js` and update your firebase config.
import firebase from "./firebase";

export async function writeEvents(userId, events) {
  const database = firebase.database();

  // Note: `set` method returns a promise.
  // Reference: https://firebase.google.com/docs/database/web/read-and-write#receive_a_promise
  
  await database.ref(`${userId}/events`).set(events);
}
