// TODO: Go to `./firebase.js` and update your firebase config.
import firebase from "./firebase";

export async function saveSampleData() {
  const database = firebase.database();

  // Note: `set` method returns a promise.
  // Reference: https://firebase.google.com/docs/database/web/read-and-write#receive_a_promise
  await database.ref("userId/").update({
    "help": "ref",
  });
}

export async function loadSampleData() {
  const database = firebase.database().ref("userId/");
  // Note: `set` method returns a promise.
  // Reference: https://firebase.google.com/docs/database/web/read-and-write#receive_a_promise
  const data = await database.once("value");

  return data.val();
}
