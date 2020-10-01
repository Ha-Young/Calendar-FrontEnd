// TODO: You can modify, add, remove as you need.
import firebase from './firebase';

const database = firebase.database();
const eventsRef = database.ref('events/');

const addToEventList = (event) => {
  return { type: 'ADD_EVENT', events: event };
};

const updateToEventList = (event) => {
  return { type: 'UPDATE_EVENT', events: event };
};

const generateRandomString = () => (Math.random().toString(36).substring(2));

// ========================================================

export async function readEventList(dispatch) {
  await eventsRef.on('value', function (snapshot) {
    console.log('listener called');
    dispatch({ type: 'RECEIVE_EVENTS', events: snapshot.val() });
  });
}

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
  await database.ref('events/').child(data.id).update(data, function (error) {
    console.warn(error);
  });

  const result = await readEventListOnce();
  dispatch(updateToEventList(result));
}

export async function deleteEvent(id, dispatch) {
  await database.ref('events/').child(id).remove();
  dispatch({ type: 'DELETE_EVENT', events: id });
}

  // console.log('readEvent: ', result.val());
  // const result = await readEventListOnce();
  // console.log('deleteEvent:', result);

// ========================================================

// export async function saveSampleData () {
//   // const database = firebase.database();

//   // Note: `set` method returns a promise.
//   // Reference: https://firebase.google.com/docs/database/web/read-and-write#receive_a_promise
//   // await database.ref('test/123').set({
//   //   test: 'text'
//   // });
// }

// export async function readEventList() {
//   await database.ref('events/').on('value', function (snapshot) {
//     // if (snapshot.val() === null) {
//     //   await database.ref('events/').set({
//     //     test: 'text'
//     //   });
//     //   return;
//     // }
//     console.log('firebase: ', snapshot.val());
//   });
// }


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

// const DUMMY = {
//   'date_1601337600000': [
//     {
//       id: 'event1',
//       title: 'Watch movie',
//       description: 'At home',
//       date: '2020-09-29',
//       startTime: '14:00',
//       endTime: '16:00',
//     }
//   ],
//   'date_1601424000000': [
//     {
//       id: 'event2',
//       title: 'GO HOME',
//       description: 'At home',
//       date: '2020-09-30',
//       startTime: '18:00',
//       endTime: '20:00',
//     }
//   ]
// };
