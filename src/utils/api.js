// TODO: You can modify, add, remove as you need.
import firebase from './firebase';
import { generateRandomString } from './generateRandomString';
import { addToEventList, updateToEventList, deleteTargetEvent } from '../actions/index';

const database = firebase.database();
const eventsRef = database.ref('events/');

export async function readEventListOnce() {
  const result = await eventsRef.once('value');
  return result.val();
}

export async function writeEvent(data, dispatch) {
  data.id = `event_${generateRandomString()}`;

  await database.ref(`events/${data.id}`).set(data, function (error) {
    console.warn(error);
  });

  const result = await readEventListOnce();
  dispatch(addToEventList(result));
}

export async function updateEvent(data, dispatch) {
  await eventsRef.child(data.id).update(data, function (error) {
    console.warn(error);
  });

  const result = await readEventListOnce();
  dispatch(updateToEventList(result));
}

export async function deleteEvent(id, dispatch) {
  await eventsRef.child(id).remove();
  dispatch(deleteTargetEvent(id));
}

// export function getSample() {
//   const result = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({})
//     }, 500);
//   });

//   return result;
// }

// const DUMMY = {
//   event_1: {
//     id: 'event_1',
//     title: 'Watch movie',
//     description: 'At home',
//     date: '2020-09-29',
//     startTime: '14:00',
//     endTime: '16:00',
//   },
//   event_2: {
//     id: 'event_2',
//     title: 'Go to the park',
//     description: 'nono',
//     date: '2020-09-30',
//     startTime: '14:00',
//     endTime: '16:00',
//   }
// }
