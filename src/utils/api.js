// TODO: You can modify, add, remove as you need.
import firebase from './firebase';

// export async function saveSampleData() {
//   const database = firebase.database();

//   // Note: `set` method returns a promise.
//   // Reference: https://firebase.google.com/docs/database/web/read-and-write#receive_a_promise
//   await database.ref('test/123').set({
//     test: 'text'
//   });

//   console.log("database", database);
// }

export async function setEventData(event) {
  const database = firebase.database();
  console.log("!!!!!!!!!!!!!!", event);

  const year = event.date.substring(0, 4);
  const month = event.date.substring(5, 7);
  const date = event.date.substring(8);
  const startTime = event.startTime;

  return await database.ref(`${year}/${month}/${date}/${startTime}`).set({
    eventId: event.eventId,
    title: event.title,
    description: event.description,
    startTime: event.startTime,
    endTime: event.endTime,
  });
}

export function getDataFromDB(callback, date) {
  const database = firebase.database();

  const year = date.slice(0, 4);
  const month = date.slice(5, 7);
  const day = date.slice(8, 10);

  const ref = database.ref(`${year}/${month}/${day}`);

  ref.on('value', (snapshot) => {
    console.log("SNAPSHOT,", snapshot.val());
    callback(snapshot.val());
  });
}

export function cancelOutReadEventData(callback, date) {
  const database = firebase.database();

  const year = date.slice(0, 4);
  const month = date.slice(5, 7);
  const day = date.slice(8, 10);

  const ref = database.ref(`${year}/${month}/${day}`);

  ref.off('value', (snapshot) => {
    callback(snapshot.val());
  })
}
