// TODO: You can modify, add, remove as you need.
import firebase from './firebase';

export async function saveSampleData () {
  const database = firebase.database();

  //Note: `set` method returns a promise.
  //Reference: https://firebase.google.com/docs/database/web/read-and-write#receive_a_promise
  await database.ref('chalender/event').set({
    test: 'text'
  });
}
