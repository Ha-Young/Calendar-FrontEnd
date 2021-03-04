// TODO: Go to `./firebase.js` and update your firebase config.
import { getDateListBasedOnRange, getWeekDateListBasedOnDate } from "../utils/date";
import firebase from "./firebase";

const ROOT_DIR = 'schedule';

export async function saveSampleData() {
  const database = firebase.database();

  // Note: `set` method returns a promise.
  // Reference: https://firebase.google.com/docs/database/web/read-and-write#receive_a_promise
  await database.ref("test/123").set({
    test: "text",
  });
}

export async function writeEvent(userId, event) {
  const database = firebase.database();

  const {
    id,
    title,
    description,
    date,
    startDate,
    endDate,
    timeLength,
  } = event;

  return await database.ref(`${ROOT_DIR}/${userId}/${date}/${id}`).set({
    id,
    title,
    description,
    date,
    startDate,
    endDate,
    timeLength,
  });
}

export async function readDate(userId, currentDate) {
  const database = firebase.database();
  const snapshot = await database.ref(`/${ROOT_DIR}/${userId}/${currentDate}`).once('value');

  const data = snapshot.val() || [];

  return {
    [currentDate]: data,
  };
}

export async function readDateListRange(userId, startDate, endDate) {
  const result = {};
  const needDateList = getDateListBasedOnRange(startDate, endDate);
  console.log('needDateList', needDateList);
  const database = firebase.database();
  console.log(`/${ROOT_DIR}/${userId}`);
  const snapshot = await database.ref(`/${ROOT_DIR}/${userId}`).orderByKey().startAt(startDate).endAt(endDate).once('value');
  console.log(snapshot.val());

  const getDateList = snapshot.val();
  console.log(getDateList);

  for (const needDate of needDateList) {
    if (needDate in getDateList) {
      console.log('hoho', getDateList[needDate]);
      result[needDate] = getDateList[needDate];
      continue;
    }

    result[needDate] = null;
  }

  return result;
}
