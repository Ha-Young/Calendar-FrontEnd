import getCurrentDate from "./getCurrentDate";

function getCurrentWeek(currentDay) {
  const weekArray = [];

  for (let i = -3; i <= 3; i++) {
    const date = new Date(currentDay);
    date.setDate(date.getDate() + i);
    weekArray.push(getCurrentDate(date));
  }

  return weekArray;
}

export default getCurrentWeek;
