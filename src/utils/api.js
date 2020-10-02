import { authService, database } from 'utils/firebase';

export const saveData = async event => {
  const user = authService.currentUser.uid;
  const year = event.date.substring(0, 4);
  const month = event.date.substring(5, 7);
  const id = String(Date.now());

  await database.ref(`users/${user}/events/${year}/${month}/${id}`).set(
    event
  );
};

export const getData = async (user, dispatch, isDispatch) => {
  await database.ref(`users/${user}`).on('value', function (snapshot) {
    const data = snapshot.val();

    dispatch(data);
    isDispatch(true);
  });
};
