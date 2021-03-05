// TODO: Go to `./firebase.js` and update your firebase config.
import { database } from "firebase";
import firebase from "./firebase";

const data = firebase.database();

// export async function saveSampleData() {
//   const database = firebase.database();

//   // Note: `set` method returns a promise.
//   // Reference: https://firebase.google.com/docs/database/web/read-and-write#receive_a_promise
//   await database.ref("test/123").set({
//     test: "hello",
//   });
// }

export const createEvent = async ({ userId, title, date, startTime, endTime, location, description, eventColor }) => {
  await data.ref(`events/${userId}/${date}/${startTime}`).set({
    title,
    date,
    startTime,
    endTime,
    location,
    description,
    eventColor,
  });
};

export const getEvents = async (userId, date) => {
  const eventsRef = data.ref(`events/${userId}/${date}`);
  const result = [];

  const snapshot = await eventsRef.once("value").then((snapshot) => snapshot);

  snapshot.forEach((data) => {
    const event = data.val();
    result.push(event);
  });

  return result;
};

export const removeEvent = async (userId, date, startTime) => {
  await data.ref(`events/${userId}/${date}/${startTime}`).set(null);
};

export const updateEvent = async (userId, date, startTime, event) => {
  await removeEvent(userId, date, startTime);
  await createEvent(event);
};
