// TODO: Go to `./firebase.js` and update your firebase config.
import firebase from "./firebase";
import { getEventList } from "../actions";

export const saveEventList = async(data) => {
  const database = firebase.database();

  await database.ref("Calendar/userID").set(data);
};

const loadEventList = () => {
  const database = firebase.database();

  return database
    .ref("Calendar/userID")
    .once("value")
    .then((snapshot) =>
    snapshot.val()
    )
    .catch(console.error);
};

export const init = (dispatch) => {
  loadEventList()
    .then(result => {
      if (result) {
        dispatch(getEventList(result));
      }
    })
    .catch(console.error);
};
