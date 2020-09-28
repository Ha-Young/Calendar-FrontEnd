import { combineReducers } from "redux";
import { firebaseReducer, firestoreReducer } from "react-redux-firebase";

export const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});