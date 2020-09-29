// TODO: You can modify, add, remove as you need.
import firebase from './firebase';

export async function saveSampleData () {
  const database = firebase.database();

  // Note: `set` method returns a promise.
  // Reference: https://firebase.google.com/docs/database/web/read-and-write#receive_a_promise
  await database.ref('test/123').set({
    test: 'text'
  });
}

const DUMMY = {
  event1: {
    id: 'event1',
    title: 'Watch movie',
    description: 'At home',
    startTime: '2020-09-29-14:00',
    endTime: '2020-09-29-16:00',
  },
  event2: {
    id: 'event2',
    title: 'Watch movie',
    description: 'At home',
    startTime: '2020-09-29-14:00',
    endTime: '2020-09-29-16:00',
  }
}

export function getSample() {
  const result = new Promise((resolve) => {
    setTimeout(() => {
      resolve(DUMMY)
    }, 500);
  });

  return result;
}
