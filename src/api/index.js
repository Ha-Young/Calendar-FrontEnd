// TODO: Go to `./firebase.js` and update your firebase config.
import firebase from "./firebase";

export async function saveData(data) {
  const database = firebase.database();

  await database.ref("Calendar/userID").set(data);
}

export function getDBData() {
  const database = firebase.database();

  return database
    .ref("Calendar/userID")
    .once("value")
    .then((snapshot) =>
      snapshot.val()
    );
}
