// TODO: Go to `./firebase.js` and update your firebase config.
import firebase from "./firebase";

export const saveEventData = async (data) => {
  const database = firebase.database();
  const id = database.ref("userId/events/").push().key;

  await database.ref(`userId/events/${id}`).set({
    ...data,
    id,
  });
};

export const updateEventData = async (data) => {
  const database = firebase.database();
  const id = data.id;

  await database.ref(`userId/events/${id}`).update({
    ...data,
  });
};

export const removeEventData = async (data) => {
  const database = firebase.database();

  await database.ref(`userId/events/${data.id}`).remove();
};

export const getEventsData = async () => {
  const database = firebase.database().ref("userId/events/");
  const data = await database.once("value");

  return data.val();
};

// export const saveEventData = async () => {
//   const database = firebase.database();

//   // Note: `set` method returns a promise.
//   // Reference: https://firebase.google.com/docs/database/web/read-and-write#receive_a_promise
