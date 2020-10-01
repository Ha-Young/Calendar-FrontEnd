import { database } from '..';

const setEventByDate = async (userId, date, event) => {
  const eventRef = database.ref(`events`);
  const newEventRef = eventRef.push();

  await newEventRef.set({
    ...event,
  });
  console.log(newEventRef.getkey());
  return newEventRef.getkey();
};

export default setEventByDate;
