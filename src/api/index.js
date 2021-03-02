// TODO: Go to `./firebase.js` and update your firebase config.
import firebase from "./firebase";

export async function saveSampleData() {
  const database = firebase.database();

  // Note: `set` method returns a promise.
  // Reference: https://firebase.google.com/docs/database/web/read-and-write#receive_a_promise
  await database.ref("test/123").set({
    test: "text",
  });
}

// export default {
//   getProducts: (cb, timeout) =>
//     setTimeout(() => cb(_products), timeout || TIMEOUT),
//   buyProducts: (payload, cb, timeout) =>
//     setTimeout(() => cb(), timeout || TIMEOUT),
// };
