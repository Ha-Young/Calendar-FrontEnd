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

const DUMMY = [
  {
    id: 'event1',
    title: 'Watch movie',
    description: 'At home',
    date: '2020-09-29',
    startTime: '14:00',
    endTime: '16:00',
  },
  {
    id: 'event2',
    title: 'GO HOME',
    description: 'At home',
    date: '2020-09-30',
    startTime: '18:00',
    endTime: '20:00',
  }
];

export function getSample() {
  const result = new Promise((resolve) => {
    setTimeout(() => {
      resolve(DUMMY)
    }, 500);
  });

  return result;
}

// const DUMMY = {
//   event1: {
//     id: 'event1',
//     title: 'Watch movie',
//     description: 'At home',
//     date: '2020-09-29',
//     startTime: '14:00',
//     endTime: '16:00',
//   },
//   event2: {
//     id: 'event2',
//     title: 'Watch movie',
//     description: 'At home',
//     date: '2020-09-30',
//     startTime: '2020-10-15-14:00',
//     endTime: '2020-10-15-16:00',
//   }
// }