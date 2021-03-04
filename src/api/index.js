// TODO: Go to `./firebase.js` and update your firebase config.
import firebase from "./firebase";

export async function loadUserData(userId) {
  const database = firebase.database();

  // Note: `set` method returns a promise.
  // Reference: https://firebase.google.com/docs/database/web/read-and-write#receive_a_promise
  
  // await database.ref("id/").set({
  //   date:1,
  //   events:2
  // });

  // await database.ref(`${userId}/`).on("value", (snapshot) => {
  //   const data = snapshot.val();
  //   console.log(data);
  // });


}
