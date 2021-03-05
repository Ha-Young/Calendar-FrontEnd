// TODO: Go to `./firebase.js` and update your firebase config.
import firebase from "./firebase";

const auth = firebase.auth();
const database = firebase.database();

export async function saveEventInDatabase(event) {
  await database.ref(`events/byIds/${event.id}`).set(event);
  await database.ref(`events/byDates/${event.date}/${event.id}`).set(event);
};

export async function getAllEvents() {
  const events = [];
  const snapshot = await database
    .ref(`events/byIds/`)
    .once("value")
    .then((snapshot) => snapshot);
  const snapshotObject = snapshot.val();

  for (const key in snapshotObject) {
    if (Object.hasOwnProperty.call(snapshotObject, key)) {
      events.push(snapshotObject[key]);
    }
  }

  return events;
}

export async function removeEventFromDatabase(event) {
  await database.ref(`events/byIds/${event.id}`).remove();
  await database.ref(`events/byDates/${event.date}/${event.id}`).remove();
}

export async function updateEventAtDatabase(prevEvent, updatedEvent) {
  removeEventFromDatabase(prevEvent);
  saveEventInDatabase(updatedEvent);
}

export async function createUser(email, password, handleError) {
  try {
    return await auth.createUserWithEmailAndPassword(email, password);
  } catch (error) {
    handleError(error);
    return null;
  }
}

export async function sigIn(email, password, handleError) {
  try {
    return await auth.signInWithEmailAndPassword(email, password);
  } catch (error) {
    handleError(error);
    return null;
  }
}

export async function sigInWithProvider(provider, handleError) {
  try {
    return await auth.signInWithPopup(provider);
  } catch (error) {
    handleError(error);
    return null;
  }
}

export function GoogleProvider(handleError) {
  try {
    return new firebase.auth.GoogleAuthProvider();
  } catch (error) {
    handleError(error);
    return null;
  }
}

export function onAuthStateChanged(callback) {
  auth.onAuthStateChanged(callback);
}
