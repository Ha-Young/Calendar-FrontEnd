import firebase from './firebase';

const database = firebase.database();
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
};
