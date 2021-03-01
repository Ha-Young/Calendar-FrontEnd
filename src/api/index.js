// TODO: Go to `./firebase.js` and update your firebase config.
import firebase from "./firebase";

export async function saveSampleData() {
  const database = firebase.database();

  // Note: `set` method returns a promise.
  // Reference: https://firebase.google.com/docs/database/web/read-and-write#receive_a_promise
  await database.ref("test/123").set({
    test: "text",
    hello: "hi",
    text: "dummy",
  });
}

export async function updateSample() {
  const database = firebase.database();

  await database.ref("test").child("123").update({test: "Change?"});
}

export async function addSample() {
  const database= firebase.database();

  const newKey = await database.ref("test").push().key;

  const updates = {};

  updates["/test/123/" + newKey] = "value";

  await database.ref().update(updates);
}

export async function addfolder() {
  const databaseRef = firebase.database().ref();

  await databaseRef.on("value", (snapShot) => {
    const data = snapShot.val();
    console.log(data);
  });
}
