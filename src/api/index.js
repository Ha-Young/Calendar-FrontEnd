// TODO: Go to `./firebase.js` and update your firebase config.
import firebase from "./firebase";

export async function saveEvents() {
  const database = firebase.database();

  // Note: `set` method returns a promise.
  // Reference: https://firebase.google.com/docs/database/web/read-and-write#receive_a_promise

  await database.ref("userId/user1").set({
    "2021-03-05" : "abc"
  });

  await database.ref("eventId/bcd").set({
    title: "go2",
    start: 11,
  });
}

export async function readTest(updateStores) {
  const database = firebase.database();

  await database.ref("userId/user1")
  .on("value", (result) => {
    if (result) updateStores(result.val());
  });
}
