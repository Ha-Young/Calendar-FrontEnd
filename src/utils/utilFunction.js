import moment from "moment";
import { dateConst } from "constants/constants";

export const getDateISO = (ref = 0) => {
  return moment().add(ref, "days").format("YYYY-MM-DD");
};

export const parseDate = (date = "") => {
  const weekOfMonth = getWeekOfMonth(date);

  return {
    year: moment(date).day(0).format("YYYY"),
    weekOfMonth,
    month: moment(date).format("MM"),
    date: moment(date).format("DD"),
    day: moment(date).format("dddd"),
  };
};

export const getWeekOfMonth = (date = "") => {
  return Math.ceil(moment(date).day(0).date() / 7).toString();
};

export const getDaysOfWeek = (ref = 0) => {
  const thisWeek = [];

  for (let i = ref; i < ref + dateConst.DAY_OF_WEEK; i++) {
    thisWeek.push(moment().day(i).format("MM DD dddd").split(" "));
  }

  return thisWeek;
};

export const getMonthAndWeek = (count = 0) => {
  const target = moment().day(count);
  const monthAndWeek = {};
  const weekOfMonth = Math.ceil(target.date() / 7);
  monthAndWeek.month = target.format("MM");
  monthAndWeek.week = weekOfMonth;

  return monthAndWeek;
};

export const generateKey = (ref = 0) => {
  let key = new Date().getTime().toString();
  const fullLength = 20;
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  for (let i = key.length; i < fullLength; i++) {
    key += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return key;
};
