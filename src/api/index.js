// TODO: Go to `./firebase.js` and update your firebase config.
import firebase from "./firebase";

export async function saveNewRecord(key, content) {
  const database = firebase.database();

  await database.ref(key).push({
    ...content
  });
}

export async function getRecord() {
  const database = firebase.database();
  const data = await database.ref("/").once('value');

  return data.val();
}
