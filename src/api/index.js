// TODO: Go to `./firebase.js` and update your firebase config.
import firebase from "./firebase";

const auth = firebase.auth();

export async function saveSampleData() {
  const database = firebase.database();

  // Note: `set` method returns a promise.
  // Reference: https://firebase.google.com/docs/database/web/read-and-write#receive_a_promise
  await database.ref("test/123").set({
    test: "text",
  });
}

export async function createUser(email, password, handleError) {
  try {
    return await auth.createUserWithEmailAndPassword(email, password);
  } catch (error) {
    handleError(error);
    return null;
  }
}

export async function sigIn(email, password, handleError) {
  try {
    return await auth.signInWithEmailAndPassword(email, password);
  } catch (error) {
    handleError(error);
    return null;
  }
}

export async function sigInWithProvider(provider, handleError) {
  try {
    return await auth.signInWithPopup(provider);
  } catch (error) {
    handleError(error);
    return null;
  }
}

export function GoogleProvider(handleError) {
  try {
    return new firebase.auth.GoogleAuthProvider();
  } catch (error) {
    handleError(error);
    return null;
  }
}

export function onAuthStateChanged(callback) {
  // const auth = firebase.auth();
  auth.onAuthStateChanged(callback);
}
