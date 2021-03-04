// TODO: Go to `./firebase.js` and update your firebase config.
import firebase from "./firebase";

export async function writeEventFb(userId, event) {
  const database = firebase.database();

  // Note: `set` method returns a promise.
  // Reference: https://firebase.google.com/docs/database/web/read-and-write#receive_a_promise
  
  await database.ref(`users/${userId}/events/${event.id}`).set(event);
}

export async function readEventsFb(userId) {
  const events = firebase.database().ref(`users/${userId}/events/`);

  return events.once("value")
    .then((snapshot) => {
      return snapshot.val();
    }).catch((err) => {
      console.error(err);
    });
}

export async function deleteEventFb(userId, eventId) {
  const database = firebase.database();
  await database.ref(`users/${userId}/events/${eventId}`).remove();
}