import { GUEST } from "../constants/login";
import firebase from "./firebase";

// what if startAt + endAt end up 2 digit
export function writeUserData(userId, date, title, detail, startAt, endAt) {
  firebase.database().ref(`users/${userId}/${date}/${startAt + endAt}`).set({
    date,
    userId,
    title,
    detail,
    startAt,
    endAt,
  }, (error) => {
    if (error) {
      console.error(error);
    }
  });
};

export async function getUserData(userId, date, startAt, endAt) {  
  const userRef = firebase.database().ref(`users/${userId}/${date}/${startAt + endAt}`);
  const snapshot = await userRef.once("value");
  const values = snapshot.val();

  return values;
}

export async function getDailyData(userId, dateISO) {
  const userRef = firebase.database().ref(`users/${userId}/${dateISO}`);
  const snapshot = await userRef.once("value", (snapshot) => snapshot);
  const values = snapshot.val();

  const result = {};

  for (const date in values) {
    result[date] = values[date];
  }

  return result;
}

export async function getAllUserData(userId) {  // date default value needed
  const result = [];

  const userRef = firebase.database().ref(`users/${userId}`);
  const snapshot = await userRef.once("value", (snapShot) => snapShot);
  const values = snapshot.val();

  for (const date in values) {
    result.push(...Object.values(values[date]));
  }

  return result;
}

export function deleteTargetData(userId, date, startAt, endAt) {
  const userRef = firebase.database().ref(`users/${userId}/${date}/${startAt + endAt}`);
  userRef.remove();
}

export async function moveDataToLoggedInUser(userId) {
  const guestRef = firebase.database().ref(`users/${GUEST}`);
  const snapshot = await guestRef.once("value", (snapShot) => snapShot);
  const guestData = snapshot.val();

  firebase.database().ref(`users/${userId}`).update(guestData, (error) => {
    if (error) {
      console.error(error);
    }
  });

  guestRef.remove();
}
