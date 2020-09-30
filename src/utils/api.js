// TODO: You can modify, add, remove as you need.
import firebase from './firebase';

export const saveData = async (event) => {
  const database = firebase.database();
  const index = event.user.indexOf('@');

  const year = event.date.substring(0, 4);
  const month = event.date.substring(5, 7);
  const day = event.date.substring(8, 10);
  const user = event.user.substring(0, index);

  // Note: `set` method returns a promise.
  // Reference: https://firebase.google.com/docs/database/web/read-and-write#receive_a_promise
  await database.ref(`users/${user}/events/${year}/${month}/${day}/${event.id}`).set(
    {
      title: event.title,
      description: event.description,
      date: event.date
    }
  );
}
