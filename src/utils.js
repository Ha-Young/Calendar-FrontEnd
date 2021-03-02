export const makeSundayDate = (date) => {
  const sundayDate = new Date();
  const todayDay = date.getDay();
  const todayDate = date.getDate();

  sundayDate.setDate(todayDate - todayDay);

  return sundayDate;
}