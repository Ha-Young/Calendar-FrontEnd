export const makeSundayDate = (date) => {
  const todayDay = date.getDay();
  const todayDate = date.getDate();

  date.setDate(todayDate - todayDay);

  return date;
}