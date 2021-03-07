// TODO: Go to `./firebase.js` and update your firebase config.
import firebase from "./firebase";

export const addEventAtFirebase = async (location, event) => {
  const database = firebase.database();

  const data = {
    ...event
  };

  await 
    database
    .ref("/" + location)
    .set(data)
    .catch(e => {
      throw new Error(e);
    });
};

export const addSample = async (location, event) => {
  const database= firebase.database();
  const updates = {};

  updates["/" + location] = event;

  await
    database
    .ref()
    .update(updates)
    .catch(e => {
      throw new Error(e);
    });
};

export const getFirebaseData = async (setData) => {
  const databaseRef = firebase.database().ref();

  await databaseRef.once("value", (snapShot) => {
    const data = snapShot.val();
    
    setData(data);
  }).catch(e => {
    throw new Error(e);
  });
};

export const logFirebaseData = async () => {
  const databaseRef = firebase.database().ref();

  await databaseRef.on("value", (snapShot) => {
    const data = snapShot.val();

    console.log(data);
  });
};
