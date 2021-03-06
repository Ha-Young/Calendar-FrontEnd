import firebase from "./firebase";

const database = firebase.database();

export async function saveToFirebaseDB(path, data) {
  return database.ref(path).set(data);
}

// export async function fetchMonthlyEvent(path) {
//   database.
//   .then((snapshot) => {
//     console.log(snapshot)
//   })

// }
