// TODO: Go to `./firebase.js` and update your firebase config.
import firebase from "./firebase";
import { generateUrlByDate } from "../utils/date";

export const saveEventData = async (data) => {
  const database = firebase.database();
  const path = generateUrlByDate(data.date, data.startTime);
  console.log(data.startTime);
  console.log(path);
  // Note: `set` method returns a promise.
  // Reference: https://firebase.google.com/docs/database/web/read-and-write#receive_a_promise
  await database.ref(`userId/${path}`).update({
    ...data,
  });
};

export const getEventsData = async () => {
  const database = firebase.database().ref("userId/");
  // Note: `set` method returns a promise.
  // Reference: https://firebase.google.com/docs/database/web/read-and-write#receive_a_promise
  const data = await database.once("value");

  return data.val();
};

// export const saveEventData = async () => {
//   const database = firebase.database();

//   // Note: `set` method returns a promise.
//   // Reference: https://firebase.google.com/docs/database/web/read-and-write#receive_a_promise
//   await database.ref("userId/").update({
//     "2021-03-02": {
//       id: "2021-03-02",
//       events: ["event1", "event2", "event3"],
//     },
//   });

//   await database.ref("userId/events").update({
//     "event1": {
//       id: "event1",
//       data: {},
//     },
//     "event2": {
//       id: "event2",
//       data: {},
//     },
//     "event3": {
//       id: "event3",
//       data: {},
//     },
//   });
// };
