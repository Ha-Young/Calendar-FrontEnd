// TODO: You can modify, add, remove as you need.
import firebase, { auth } from "./firebase";
import { TIME_INDEX } from "../constants";

export function saveNewEvent(
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
  const startTime = TIME_INDEX[start.slice(0, -2)];
  const finishTime = TIME_INDEX[finish.slice(0, -2)];
  const database = firebase.database();

  console.log(date, start, finish);

  database.ref(`${auth.currentUser.uid}/${year}/${month}/${day}`).push({
    title,
    description,
    startTime,
    finishTime,
  });
}
