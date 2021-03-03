// TODO: Go to `./firebase.js` and update your firebase config.
import firebase from "./firebase";

export async function saveNewRecord(content) {
  const database = firebase.database();

  await database.ref("events/").push({
    title: content.title,
    description: content.description,
    startDate: content.startDate,
    startHour: content.startHour,
    endHour: content.endHour
  });
}
