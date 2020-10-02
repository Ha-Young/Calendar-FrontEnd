// TODO: You can modify, add, remove as you need.
import firebase from './firebase';

const database = firebase.database();

export async function getEventData() {
  database.ref('Events/').on('value', snapshot => {
    try {
      const eventList = snapshot.val();

      return eventList;
    } catch (err) {
      console.warn(err);
    }
  });
};

export async function saveEventData(data) {
  //const trimForSaveData = trimEventInfo(data);
  // Note: `set` method returns a promise.
  // Reference: https://firebase.google.com/docs/database/web/read-and-write#receive_a_promise
  const savedpath = data.startEventDate;

  await database.ref(`Events/${savedpath}`).push(data);
}

export async function updateEventData(targetPathAndId, data) {
  await database.ref(`Event/${targetPathAndId}`).update(data);
}
