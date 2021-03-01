// TODO: Go to `./firebase.js` and update your firebase config.
import firebase from "./firebase";

export async function saveSampleData() {
  const database = firebase.database();

  // Note: `set` method returns a promise.
  // Reference: https://firebase.google.com/docs/database/web/read-and-write#receive_a_promise
  await database.ref("test").set({
    english: "abc",
  });

  await database.ref("test/vaco").set({
    onemo: 'burger',
    yunsu: 'pizza'
  });

  const newKey = database.ref("test/vaco").push().key;
  const update = {};

  update['/test/vaco' + newKey] = "helllooo";

  database.ref().update(update);
  database.ref("test/vaco/onemo").set("willbechicken");
  database.ref("test/vaco").update({onemo: "goood", yunsu: "niceeee"});
}
