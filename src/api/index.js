import { authService, firebaseInstance } from "./firebaseService";
import { mockEvent } from "utils/mock.js";

export async function saveSampleData() {
  const database = firebaseInstance.database();

  await database.ref("test/123").set({
    test: "text",
  });

  await database.ref(`/event/${authService.currentUser.uid}`).set(mockEvent);

  await database
    .ref(`/event/${authService.currentUser.uid}`)
    .on("value", (snapshot) => console.log(snapshot.val()));
}

export const getCurrentEventList = async () => {};

export const addNewEvent = async () => {};

export const updateEventList = async () => {};
