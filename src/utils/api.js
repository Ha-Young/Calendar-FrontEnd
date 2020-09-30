import firebase from './firebase';

export const authService = firebase.auth();
export const dataService = firebase.database();

export function setDataToFirebase(data) {
  dataService.ref(`/calendar/userId/${data.creator}/events`).push(
    data.id
  )

  dataService.ref(`/calendar/events/${data.id}`).set({
    ...data,
  });
}

export async function getDataFromFirebase(userId) {
  return await dataService.ref(`/calendar/userId/${userId}`).once('value');
}
