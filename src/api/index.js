// TODO: Go to `./firebase.js` and update your firebase config.
import firebase from "./firebase";

export const saveEventData = async (data) => {
  const database = firebase.database();
  const path = database.ref("userId/events/").push().key;

  // Note: `set` method returns a promise.
  // Reference: https://firebase.google.com/docs/database/web/read-and-write#receive_a_promise
  await database.ref(`userId/events/${path}`).set({
    ...data,
    path,
  });
};

export const updateEventData = async (data) => {
  const database = firebase.database();
  const path = data.path;

  // Note: `set` method returns a promise.
  // Reference: https://firebase.google.com/docs/database/web/read-and-write#receive_a_promise
  await database.ref(`userId/events/${path}`).update({
    ...data,
  });
};

export const removeEventData = async (path) => {
  const database = firebase.database();

  // Note: `set` method returns a promise.
  // Reference: https://firebase.google.com/docs/database/web/read-and-write#receive_a_promise
  await database.ref(`userId/events/${path}`).remove();
};

export const getEventsData = async () => {
  const database = firebase.database().ref("userId/events/");
  // Note: `set` method returns a promise.
  // Reference: https://firebase.google.com/docs/database/web/read-and-write#receive_a_promise
  const data = await database.once("value");

  return data.val();
};

// export const saveEventData = async () => {
//   const database = firebase.database();

//   // Note: `set` method returns a promise.
//   // Reference: https://firebase.google.com/docs/database/web/read-and-write#receive_a_promise
