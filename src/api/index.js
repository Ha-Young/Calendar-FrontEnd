// TODO: Go to `./firebase.js` and update your firebase config.
import firebase from "./firebase";

export async function saveNewRecord(content) {
  const database = firebase.database();
  const refs = content.startDate.replace(/-/gi, "/") + "/" + content.startHour;;
  const duration = JSON.stringify(parseInt(content.endHour) - parseInt(content.startHour));

  await database.ref(refs).push({
    title: content.title,
    description: content.description,
    duration: duration,
  });
}

export async function getRecord(date) {
  const database = firebase.database();
  const refs = date.replace(/-/gi, "/");
  
  const data = await database.ref(refs).once('value');
  return data.val();
}

