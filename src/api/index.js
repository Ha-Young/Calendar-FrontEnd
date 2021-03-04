// TODO: Go to `./firebase.js` and update your firebase config.
import firebase from "./firebase";
import { endsOfWeek } from "../utils/date";

export const saveEventData = async (data) => {
  const database = firebase.database();
  const id = database.ref("userId/events/").push().key;

  await database.ref(`userId/events/${id}`).set({
    ...data,
    id,
  });

  return {
    ...data,
    id,
  };
};

export const changeEventData = async (data) => {
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

export const loadEventData = async (date) => {
  const [startOfWeek, endOfWeek] = endsOfWeek(date);

  const database = firebase
    .database()
    .ref("userId/events/")
    .orderByChild("date")
    .startAt(startOfWeek)
    .endAt(endOfWeek);

  const data = await database.once("value");
  
  return data.val();
};

// Note: `set` method returns a promise.
// Reference: https://firebase.google.com/docs/database/web/read-and-write#receive_a_promise
