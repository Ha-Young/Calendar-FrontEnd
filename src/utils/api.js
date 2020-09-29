// TODO: You can modify, add, remove as you need.
import firebase from './firebase';

export async function saveData () {
  const database = firebase.database();

  // Note: `set` method returns a promise.
  // Reference: https://firebase.google.com/docs/database/web/read-and-write#receive_a_promise
  await database.ref('test/123').set({
    test: 'text'
  });
}
