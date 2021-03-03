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

export const createEvent = async ({ title, date, startTime, endTime, location, description = "" }) => {
  await data.ref(`events/${date}/${startTime}`).set({
    title,
    date,
    startTime,
    endTime,
    location,
    description,
  });
};

export const getEvents = async (date) => {
  const eventsRef = data.ref(`events/${date}`);
  const result = [];

  const snapshot = await eventsRef.once("value").then((snapshot) => snapshot);

  snapshot.forEach((data) => {
    const event = data.val();
    result.push(event);
  });

  return result;
};

export const removeEvent = async (date, startTime) => {
  await data.ref(`events/${date}/${startTime}`).set(null);
  console.log("delete..");
};

export const updateEvent = async (date, startTime, event) => {
  await removeEvent(date, startTime);
  await createEvent(event);
};
