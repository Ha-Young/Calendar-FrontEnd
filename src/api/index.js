// TODO: Go to `./firebase.js` and update your firebase config.
import { database } from "firebase";
import firebase from "./firebase";

export async function saveSampleData() {
  const database = firebase.database();

  // Note: `set` method returns a promise.
  // Reference: https://firebase.google.com/docs/database/web/read-and-write#receive_a_promise
  await database.ref("test/123").set({
    test: "text",
    id: "안녕!",
    good: "good"
  });
}

export async function addEvent(event) {
  const database = firebase.database();

  await database.ref("events/").push(event);
}

// export async function addEvent(date) {

//   await database.ref(`AllId/${date}`)
// }

// export async function removeEvents() {
//   const database = firebase.database();

//   // await database.ref()
// }

// export async function addEvents(data) {
//   const database = firebase.database();

//   await database.ref()
// }

// export async function fetchEvents() {
//   const database = firebase.database();

//   database.ref("test").once("value");
// }
