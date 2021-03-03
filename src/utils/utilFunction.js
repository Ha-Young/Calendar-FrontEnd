import moment from "moment";
import { dateConst } from "constants/constants";

export const getDaysOfWeek = (ref = 0) => {
  const thisWeek = [];

  for (let i = ref; i < ref + dateConst.DAY_OF_WEEK; i++) {
    thisWeek.push(moment().day(i).format("MM DD dddd").split(" "));
  }

  return thisWeek;
};

export const getWeekOfMonth = (count = 0) => {
  const target = moment().day(count);
  const monthAndWeek = {};
  const weekOfMonth = Math.ceil(target.date() / 7);
  monthAndWeek.month = target.format("MM");
  monthAndWeek.week = weekOfMonth;

  return monthAndWeek;
};
export const getWeekOfMonthByDate = (date = "") => {
  return Math.ceil(moment(date).day(0).date() / 7);
};

export const getThisWeek = () => {
  return Math.ceil(moment().day(0).date() / 7);
};

export const getToday = () => {
  return moment().format("YYYY-MM-DD");
};

export const getDateISOByRef = (ref = 0) => {
  return moment().add(ref, "days").format("YYYY-MM-DD");
};

export const getDateByRef = (ref = 0) => {
  const momentDate = moment().add(ref, "days");
  return {
    month: momentDate.format("MM"),
    date: momentDate.format("DD"),
    day: momentDate.format("dddd"),
  };
};

export const parseDate = (date = "") => {
  return {
    year: moment(date).day(0).format("YYYY"),
    month: moment(date).day(0).format("MM"),
    weekOfMonth: getWeekOfMonthByDate(date).toString(),
  };
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
