// TODO: Go to `./firebase.js` and update your firebase config.
import firebase from "./firebase";

const database = firebase.database();

export async function uploadData(event) {
  if (!event) {
    return;
  }

  const id = event.id;
  const eventByid = { [id]: { ...event } };

  await database.ref("event").update(eventByid);
}

export async function deleteData(eventId) {
  await database.ref(`event/${eventId}`).remove();
}
