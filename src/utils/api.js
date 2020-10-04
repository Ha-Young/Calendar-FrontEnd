import { auth, database } from "./firebase";
import { TIME_INDEX } from "../constants";

export function saveNewEvent(
  title,
  description,
  date,
  start,
  finish,
) {
  console.log(date);
  const startTime = TIME_INDEX[start.slice(0, -2)];
  const finishTime = TIME_INDEX[finish.slice(0, -2)];

  database.ref(`${auth.currentUser.uid}/${date}`).push({
    title,
    description,
    startTime,
    finishTime,
  });
}

export function editEvent(
  eventId,
  title,
  description,
  date,
  start,
  finish,
) {
  const startTime = TIME_INDEX[start.slice(0, -2)];
  const finishTime = TIME_INDEX[finish.slice(0, -2)];

  database.ref(`${auth.currentUser.uid}/${date}/${eventId}`).update({
    title,
    description,
    startTime,
    finishTime,
  });
}
