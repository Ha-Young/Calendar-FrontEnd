// TODO: Go to `./firebase.js` and update your firebase config.
import firebase from "./firebase";

export async function saveSampleData() {
  const database = firebase.database();

  // Note: `set` method returns a promise.
  // Reference: https://firebase.google.com/docs/database/web/read-and-write#receive_a_promise

  await database.ref("test/124").set({ // root에 현재 이 데이터도 추가
    굳: "굳?",
    난이도: "극악"
  });

  await database.ref("test/123").set({
    test: "text",
    id: "안녕!",
    good: "호에에에엥"
  });

  await database.ref("test/123/1111").set({
    zz: "잠 온다"
  });

  const calendarData = firebase.database().ref("test");

  calendarData.on("value", (snapshot) => {
    const data = snapshot.val();
    console.log(data);
  });
}
