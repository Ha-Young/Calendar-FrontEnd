import { nanoid } from 'nanoid';
import moment from 'moment';

import firebase from './firebase';

export const authService = firebase.auth();
export const dataService = firebase.database();

export function setDataToFirebase(data, uid) {
  const dataId = nanoid(12);

  dataService.ref(`/calendar/userId/${uid}/events/${dataId}`).set({
    ...data,
    id: dataId,
    creator: uid,
    createdAt: moment().format('YYYY-MM-DD'),
  });
}
