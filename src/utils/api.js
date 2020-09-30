// TODO: You can modify, add, remove as you need.
import { database } from './firebase';

export const saveData = async (event) => {
  const year = event.startDate.substring(0, 4);
  const month = event.startDate.substring(5, 7);
  const day = event.startDate.substring(8, 10);
  const user = event.user;

  // Note: `set` method returns a promise.
  // Reference: https://firebase.google.com/docs/database/web/read-and-write#receive_a_promise
  await database.ref(`users/${user}/events/${year}/${month}/${day}/${event.id}`).set(
    {
      title: event.title,
      description: event.description,
      startDate: event.startDate,
      endDate: event.endDate
    }
  );
}
