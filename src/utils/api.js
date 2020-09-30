// TODO: You can modify, add, remove as you need.
import firebase from './firebase';

const database = firebase.database();

export async function pushData (data) {
  await database.ref("/").push(data);
}

export async function getData () {
  const data = [];
  await database.ref("/").once("value", (snapshot) => {
    snapshot.forEach((childSnapshot) => {
      data.push(childSnapshot.val());
    });
  });

  return data;
}

// database 수정, 삭제 등 비동기 처리는 모두 container 영역에서 진행하기!

// export async function saveSampleData () {
//   const database = firebase.database();

//   // Note: `set` method returns a promise.
//   // Reference: https://firebase.google.com/docs/database/web/read-and-write#receive_a_promise
//   await database.ref('test/123').set({
//     test: 'text'
//   });
// }
