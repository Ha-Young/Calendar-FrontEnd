// TODO: You can modify, add, remove as you need.
import firebase, { auth } from "./firebase";

export async function saveSampleData() {
  const database = firebase.database();

  // Note: `set` method returns a promise.
  // Reference: https://firebase.google.com/docs/database/web/read-and-write#receive_a_promise
  await database.ref("test/123").set({
    test: "text"
  });
}

const TIME_INDEX = {
  "오전 12시": "00",
  "오전 1시": "01",
  "오전 2시": "02",
  "오전 3시": "03",
  "오전 4시": "04",
  "오전 5시": "05",
  "오전 6시": "06",
  "오전 7시": "07",
  "오전 8시": "08",
  "오전 9시": "09",
  "오전 10시": "10",
  "오전 11시": "11",
  "오후 12시": "12",
  "오후 1시": "13",
  "오후 2시": "14",
  "오후 3시": "15",
  "오후 4시": "16",
  "오후 5시": "17",
  "오후 6시": "18",
  "오후 7시": "19",
  "오후 8시": "20",
  "오후 9시": "21",
  "오후 10시": "22",
  "오후 11시": "23",
  "오후 11시59분": "24"
};

export async function saveNewEvent(
  title,
  description,
  date,
  start,
  finish,
) {
  const dateArray = date.split("-");
  const year = dateArray[0];
  const month = dateArray[1];
  const day = dateArray[2];
  const startTime = start.slice(0, -2);
  const finishTime = finish.slice(0, -2);
  const database = firebase.database();

  await database.ref(`${auth.currentUser.uid}/${year}/${month}/${day}`).push({
    title,
    description,
    startTime: TIME_INDEX[startTime],
    finishTime: TIME_INDEX[finishTime],
  });
}
