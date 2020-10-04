import { nanoid } from 'nanoid';
import { format } from 'date-fns';

import firebase from './firebase';
import { reduceSnapshot } from '../utils/utilFunction';

export const authService = firebase.auth();
export const dataService = firebase.database();

function firebaseDataUrl(uid, dataId = '') {
  return `/calendar/userId/${uid}/events/${dataId}`;
}

export async function postDataToFirebase({
  data: {
    eventData,
    uid,
    dataId = nanoid(12),
  },
  success,
  fail
}) {
  try {
    await dataService.ref(firebaseDataUrl(uid, dataId)).set({
        ...eventData,
        id: dataId,
        creator: uid,
        createdAt: format(new Date(), 'yyyy-MM-dd'),
      });
    success();
  } catch (err) {
    fail(err.message)
  }
}

export function deleteDataFromFirebase(uid, dataId) {
  dataService.ref(firebaseDataUrl(uid, dataId)).set(null);
}

//Return value is not promise. Can not use finally block.
export function getDateFromFirebase({ uid, success, fail, final }) {
  try {
    dataService.ref(firebaseDataUrl(uid))
      .on('value', (snapshot) => {
        success(reduceSnapshot(snapshot.val()));
        final();
      });
  } catch(err) {
    fail(err.message);
    final();
  }
}

export function observeAuthService() {
  return new Promise((resolve, reject) => {
    try {
      authService.onAuthStateChanged((user) => {
        resolve(user);
      });
    } catch(err) {
      reject(err);
    }
  });
}
