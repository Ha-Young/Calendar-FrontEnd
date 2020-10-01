// TODO: You can modify, add, remove as you need.
import firebase from './firebase';

const database = firebase.database();

export async function saveSampleData () {
  // Note: `set` method returns a promise.
  // Reference: https://firebase.google.com/docs/database/web/read-and-write#receive_a_promise
  await database.ref('test/new').set({
    test: "I'm new"
  });
}

const databaseRef = firebase.database().ref();

export const schedule = {
  getSchedules: async (callback) => {
    try {
      await database.ref('schedule').once('value', (data) => {
        const result = data.val();
        callback(result);
      });
    } catch (err) {
      console.error(err);
    }
  },
  setSchedule: async (schedule) => {
    try {
      await databaseRef.child(`schedule/${schedule.startDate}`).push().set({
        ...schedule
      });

    } catch (err) {
      console.error(err);
    }
  }
}
