// TODO: Go to `./firebase.js` and update your firebase config.
import firebase from "./firebase";

export async function saveData(date, title, description, startTime, endTime) {
  const database = firebase.database();

  await database.ref('byDate').update({
    [date]: {
      date,
      title,
      description,
      startTime,
      endTime
    }
  });
}

export async function getData() {

}
