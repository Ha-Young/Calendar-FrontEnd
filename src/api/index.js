import { GUEST } from "../constants/login";
import firebase from "./firebase";

export function writeUserData(userData) {
  const {
    date, 
    userId, 
    title, 
    detail, 
    startAt, 
    endAt, 
  } = userData;

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
      throw new Error("FAIL ON MAKING NEW EVENT! TRY AGAIN");
    }
  });
};

export async function getDailyData(userId, dateISO) {
  const userRef = firebase.database().ref(`users/${userId}/${dateISO}`);
  const snapshot = await userRef.once("value", (snapshot) => snapshot);
  const result = snapshot.val();
  return result;
}

export async function getAllUserData(userId) {
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
  const guestData = snapshot.val() ?? {};

  firebase.database().ref(`users/${userId}`).update(guestData, (error) => {
    if (error) {
      console.error(error);
    }
  });

  guestRef.remove();
}
