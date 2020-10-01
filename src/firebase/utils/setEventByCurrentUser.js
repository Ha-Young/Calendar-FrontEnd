import { database } from '..';

const setEventByDate = async (uid, date, event) => {
  const eventRef = database.ref(`events`);
  const newEventRef = eventRef.push();

  await newEventRef.set({
    ...event,
  });

  const userEventsRef = database.ref(`users/${uid}/eventRefs/${date}`);
  await userEventsRef.set({
    [newEventRef.key]: true,
  });

  let snapShot = await newEventRef.once('value');
  return snapShot;
};

export default setEventByDate;
