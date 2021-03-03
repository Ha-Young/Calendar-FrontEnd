import moment from "moment";

const dayName = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

export const getDayStr = count => {
  const newDay = moment().add(count, 'day').format('d');

  return dayName[newDay];
};

export const getDayNum = count => {
  const newDay = moment().add(count, 'day').format('DD');

  return Number(newDay.toString());
};
